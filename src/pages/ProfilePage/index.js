import React, {
  useState,
} from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import IconFeather from 'react-native-vector-icons/Feather'
import { launchImageLibrary } from 'react-native-image-picker'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import UUIDGenerator from 'react-native-uuid-generator'
import ProgressDialog from 'react-native-progress-dialog'

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'

import { useCurrentUser } from '../../models/User'
import collectionNames from '../../constants/Firestore'

import PageContainer from '../../components/PageConainter'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput/TextInput'
import ContainedButton from '../../components/Button/ContainedButton'

import doctorImg from '../../assets/img/doctor.jpg'

import styles from './styles'

function ProfilePage() {
  const [user] = useCurrentUser()

  // console.log(user)

  const [loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState('')

  const schema = yup.object().shape({
    name: yup.mixed().required('Insira um nome'),
  })

  const handleChangeAvatarImage = () => {
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

        setAvatar(response.uri)
      } catch (err) {
        console.log(err)
      }
    })
  }

  const handleOnSubmit = async (data) => {
    try {
      setLoading(true)
      const { name } = data

      let fileName
      let urlFile

      if (avatar !== '') {
        const uuid = await UUIDGenerator.getRandomUUID()

        fileName = `${uuid}`
        const reference = storage().ref(`images/${fileName}`)
        const filePath = `${avatar}`
        await reference.putFile(filePath)
      
        urlFile = await reference.getDownloadURL()
      }
  
      // const updateUser = {
      //   ...user,
      //   name,
      //   avatarUrl: urlFile
      // }
  
      firestore()
        .collection(collectionNames.USERS)
        .doc(user.id)
        .update({
          name,
          avatarUrl: urlFile
        })
        .then(() => setLoading(false))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={schema}
        onSubmit={handleOnSubmit}
        initialValues={{
          name: user.name,
        }}
      > 
        {({ values, errors, handleChange, handleSubmit }) => (
          <PageContainer>
            <Header backButton />
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.header}>
                <View style={styles.headerContainer}>

                  <TouchableWithoutFeedback onPress={handleChangeAvatarImage}>
                    <View style={styles.avatar}>

                      {avatar !== '' ? (
                        <Image 
                          source={{ uri: avatar }}
                          style={styles.image} 
                        />
                      ) : (
                        <Image 
                          source={user.avatarUrl ? { uri: user.avatarUrl } : doctorImg}
                          style={styles.image} 
                        />
                      )}
                      <View style={styles.iconAvatar}>
                        <IconFeather name="camera" size={12} color="white" />
                      </View>
                    </View>
                  </TouchableWithoutFeedback>

                  <View style={styles.titleContainer}>
                    <Text style={styles.titlePrimary}>
                      {user.name}
                    </Text>
                  </View>

                </View>
              </View>
              <View style={styles.formContainer}>
                <TextInput
                  error={Boolean(errors.name)}
                  helperText={Boolean(errors.name) && errors.name}
                  label="Nome completo"
                  onChangeText={handleChange('name')}
                  value={values.name}
                  style={styles.input}
                />
              </View>
            </ScrollView>
            <View style={styles.footer}>
              <ContainedButton
                onPress={handleSubmit}
                title="Continuar"
                block
              />
            </View>
          </PageContainer>
        )}
      </Formik>
      <ProgressDialog 
        visible={loading} 
        label="Atualizando perfil..."
      />
    </>
  )
}

export default ProfilePage