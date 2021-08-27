import React, {
  useState,
} from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import IconFeather from 'react-native-vector-icons/Feather'
import * as yup from 'yup'
import { Formik } from 'formik'
import { launchImageLibrary } from 'react-native-image-picker'
import storage from '@react-native-firebase/storage'
import UUIDGenerator from 'react-native-uuid-generator'
import ProgressDialog from 'react-native-progress-dialog'

import {
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native'

import Screens from '../../constants/Screens'

import GroupService from '../../models/Group/service'

import cameraImg from '../../assets/img/camera.jpg'

import { TextInput } from '../../components/Input'
import { IconButton, FabButton } from '../../components/Button'
import Select from '../../components/TextInput/Select'
import Typography from '../../components/Typography'
import MemberSelectedItem from '../GroupMembersFormPage/MemberSelectedItem'

import { categories } from '../../constants/App'

import { formatData } from '../../utils'

import styles from './styles'

function GroupFormPage() {
  const navigation = useNavigation()
  const route = useRoute()
  const { members } = route.params

  const [cover, setCover] = useState('')
  const [loading, setLoading] = useState(false)

  const schema = yup.object().shape({
    name: yup.mixed().required('Insira um nome'),
    category: yup.mixed().required('Selecione uma categoria'),
  })

  const handleChangeGroupImage = () => {
    launchImageLibrary({
      mediaType: 'photo',

    }, async (response) => {
      try {
        if (response.didCancel) {
          return
        }

        if (response.errorCode) {
          return
        }

        setCover(response.uri)
      } catch (err) {
        console.log(err)
      }
    })
  }

  const handleOnSubmit = async (formData) => {
    try {
      setLoading(true)

      const { name, category } = formData

      let fileName
      let urlFile

      if (cover !== '') {
        const uuid = await UUIDGenerator.getRandomUUID()

        fileName = `${uuid}`
        const reference = storage().ref(`images/${fileName}`)
        const filePath = `${cover}`
        await reference.putFile(filePath)
      
        urlFile = await reference.getDownloadURL()
      }

      const memberUsers = members.filter(member => member.empty !== true).map(member => member.id)

      const group = {
        name,
        category: category.title,
        urlPicture: urlFile,
        adminUsers: [
          members[0].id,
        ],
        memberUsers,
      }

      GroupService.create(group, members[0])
        .then(() => setLoading(false))
        .then(() => {
          navigation.reset({
            routes: [{ name: Screens.Home }],
          })
        })
    } catch (err) {
      console.log(`${err}`)
    }
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={schema}
        onSubmit={handleOnSubmit}
        initialValues={{
          name: '',
          category: '',
        }}
      > 
        {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
          <View style={styles.root}>
            <View style={styles.header}>
              <IconButton onPress={handleGoBack} style={styles.iconButton}>
                <IconFeather name="arrow-left" size={24} />
              </IconButton>
              <View style={styles.titleContainer}>
                <Typography variant="headerTitle">
                  Novo grupo
                </Typography>
                <Typography variant="caption">
                  Adicionar nome
                </Typography>
              </View>
            </View>
            <View style={styles.content}> 
              <View style={styles.formContainer}>
                <View style={styles.formContent}>
                  <TouchableWithoutFeedback onPress={handleChangeGroupImage}>
                    <View style={styles.groupImageContainer}>
                      <Image
                        style={styles.groupImage} 
                        source={cover === '' ? cameraImg : { uri: cover }} 
                        resizeMode="cover"
                      />
                    </View>
                  </TouchableWithoutFeedback>
                  <TextInput 
                    error={Boolean(errors.name)}
                    helperText={Boolean(errors.name) && errors.name}
                    onChangeText={handleChange('name')}
                    value={values.name}
                    style={styles.input}
                    placeholder="Digite o nome do grupo aqui"
                  />
                </View>
                <Typography variant="caption">
                  Nomeie o grupo e escolha uma imagem (opcional)
                </Typography>
                <Select
                  label="Categoria"
                  onChange={(value) => setFieldValue('category', value)}
                  error={Boolean(errors.category)}
                  helperText={Boolean(errors.category) && errors.category}
                  value={values.category}
                  options={categories}
                  style={[styles.input, { marginTop: 20 }]}
                />
              </View>
              <View style={{ height: 60, marginTop: -30 }}>
                <FabButton
                  icon="check"
                  onPress={handleSubmit}
                />
              </View>
              <View style={{ paddingHorizontal: 16 }}>
              
                <View style={{ justifyContent: 'center' }}>
                  <FlatList 
                    data={formatData(members, 4)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                      if (item.empty) {
                        return <View />
                      }

                      return (
                        <MemberSelectedItem
                          member={item} 
                          onPress={() => true}
                        />
                      )
                    }}
                    numColumns={4}
                    ListHeaderComponent={() => (
                      <Typography variant="listHeader">
                        Participantes:
                      </Typography>
                    )}
                    ListHeaderComponentStyle={{
                      marginBottom: 20
                    }}
                  />
                </View>
              </View>
            </View>
          
          </View>
        )}
      </Formik>
      <ProgressDialog 
        visible={loading} 
        label="Criando grupo..."
      />
    </>
  )
}

export default GroupFormPage