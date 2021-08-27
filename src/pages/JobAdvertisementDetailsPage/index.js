import React, {
  useState,
} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import IconFeather from 'react-native-vector-icons/Feather'
import * as yup from 'yup'
import { Formik } from 'formik'
import ProgressDialog from 'react-native-progress-dialog'

import {
  View,
  Text,
  ScrollView,
} from 'react-native'

import { 
  parseDate, 
  parseHour,
} from '../../utils'

import Screens from '../../constants/Screens'

import { ChatService } from '../../models/Chat'
import { useCurrentUser } from '../../models/User'

import { capitalizeTheFirstLetterOfEachWord } from '../JobAdvertisementPage/utils'

import PageContainer from '../../components/PageConainter'
import Header from '../../components/Header'
import ForwardModal from '../../components/ForwardModal'
import IconButton from '../../components/Button/IconButton'
import ContainedButton from '../../components/Button/ContainedButton'
import Typography from '../../components/Typography'
import TextContainer from './TextContainer'

import TextInput from '../../components/TextInput/TextInput'

import styles from './styles'
import { MessageService } from '../../models/Message'

function JobAdvertisementDetailsPage() {
  const [user] = useCurrentUser()
  const navigation = useNavigation()
  const route = useRoute()
  const { item: jobAdvertisement } = route.params

  const {
    title,
    description,
    location,
    specialty,
    paymentValue,
    paymentObservation,
    startWhenDate,
    startWhenTime,
    endWhenDate,
    endWhenTime,
    ownerId,
  } = jobAdvertisement

  const [loading, setLoading] = useState(false)
  const [forwardModalVisible, setForwardModalVisible] = useState(false)

  const schema = yup.object().shape({
    message: yup.mixed().required('Escreva uma breve apresentação'),
  })

  const handleOnSubmit = async (data) => {
    try {
      setLoading(true)

      const { message } = data

      const { id: chatId } = await ChatService.create(jobAdvertisement, user)

      await MessageService.sendWorkInterestMessage(message, jobAdvertisement, user, chatId)

      setLoading(false)
    
      navigation.reset({
        routes: [{ name: Screens.Home }],
      })
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
          message: '',
        }}
      > 
        {({ values, errors, handleChange, handleSubmit }) => (
          <PageContainer>
            <Header 
              backButton 
              right={(
                <IconButton 
                  onPress={() => setForwardModalVisible(true)} 
                  style={styles.actionButton}
                >
                  <IconFeather name="corner-up-right" size={24} color="#000" />
                </IconButton>
              )} 
            />
            
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.titleContainer}>
                <Typography
                  style={styles.title}
                  variant="pageTitle"
                  gutterBottom
                >
                  Detalhes do anúncio
                </Typography>
              </View>
              <View style={styles.formContainer}>

                <TextContainer
                  icon="work"
                  label="Título"
                  style={styles.dateInput}
                >
                  <View style={styles.container}>
                    <Typography variant="body">
                      {title}
                    </Typography>
                  </View>
                </TextContainer>

                <TextContainer
                  icon="description"
                  label="Descrição"
                  style={styles.dateInput}
                >
                  <View style={styles.container}>
                    <Typography variant="body">
                      {description}
                    </Typography>
                  </View>
                </TextContainer>

                <TextContainer
                  icon="location-on"
                  label="Localização"
                >
                  <View style={{ width: '100%' }}>
                    <View style={{ flexDirection: 'row', marginTop: 6 }}>

                      <View style={{ flex: 1 }}>

                        <Text style={styles.label}>
                          Cidade
                        </Text>
                        <View style={styles.container}>
                          <Typography variant="body">
                            {capitalizeTheFirstLetterOfEachWord(location.city)}
      
                          </Typography>
                        </View>
                      </View>

                      <View style={{ flex: 1 }}>
  
                        <Text style={styles.label}>
                          Estado
                        </Text>
                        <View style={styles.container}>
                          <Typography variant="body">
                            {`${capitalizeTheFirstLetterOfEachWord(location.state)} - ${location.stateShort.toUpperCase()}`}
                          </Typography>
                        </View>
                      </View>

                    </View>

                    <Text style={[styles.label, { marginTop: 6 }]}>
                      Localidade
                    </Text>
                    <View style={styles.container}>
                      <Typography variant="body">
                        {capitalizeTheFirstLetterOfEachWord(
                          location.description
                        )}
                      </Typography>
                    </View>
                    
                  </View>
            
                </TextContainer>

                <TextContainer
                  icon="today"
                  label="Data de Início"
                >
                  <View style={styles.dateTimeContainer}>
                    <View style={styles.dateInput}>
                      <Text style={styles.label}>
                        Data
                      </Text>
                      <View style={styles.container}>
                        <Typography variant="body">
                          {parseDate(startWhenDate)}
                        </Typography>
                      </View>
                    </View>

                    <View style={styles.dateInput}>
                      <Text style={styles.label}>
                        Horário
                      </Text>
                      <View style={styles.container}>
                        <Typography variant="body">
                          {parseHour(startWhenTime)}
                        </Typography>
                      </View>
                    </View>
                  </View>
                </TextContainer>

                <TextContainer
                  icon="today"
                  label="Data de Término"
                >
                  <View style={styles.dateTimeContainer}>
                    <View style={styles.dateInput}>
                      <Text style={styles.label}>
                        Data
                      </Text>
                      <View style={styles.container}>
                        <Typography variant="body">
                          {parseDate(endWhenDate)}
                        </Typography>
                      </View>
                    </View>

                    <View style={styles.dateInput}>
                      <Text style={styles.label}>
                        Horário
                      </Text>
                      <View style={styles.container}>
                        <Typography variant="body">
                          {parseHour(endWhenTime)}
                        </Typography>
                      </View>
                    </View>
                  </View>
                </TextContainer>

                <TextContainer
                  icon="local-hospital"
                  label="Especialidade"
                >
                  <View style={styles.container}>
                    <Typography variant="body">
                      {capitalizeTheFirstLetterOfEachWord(specialty)}
                    </Typography>
                  </View>
                </TextContainer>

                <TextContainer
                  icon="attach-money"
                  label="Valor do pagamento"
                >
                  <View style={styles.container}>
                    <Typography variant="body">
                      {String(paymentValue)}
                    </Typography>
                  </View>
                </TextContainer>

                {paymentObservation !== '' && (
                  <TextContainer
                    icon="error-outline"
                    label="Observação do pagamento"
                  >
                    <View style={styles.container}>
                      <Typography variant="body">
                        {paymentObservation}
                      </Typography>
                    </View>
                  </TextContainer>
                )}

                {user.id !== ownerId && (
                  <TextInput
                    error={Boolean(errors.message)}
                    helperText={Boolean(errors.message) && errors.message}
                    label="Mensagem para o anúnciante"
                    onChangeText={handleChange('message')}
                    value={values.message}
                    style={styles.input}
                  />
                )}
              </View>
            </ScrollView>
            {user.id !== ownerId && (
              <View style={styles.footer}>
                <ContainedButton
                  onPress={handleSubmit}
                  title="Continuar"
                  block
                />
              </View>
            )}
          </PageContainer>
        )}
      </Formik>
      <ForwardModal 
        open={forwardModalVisible}
        onClose={() => setForwardModalVisible(false)}
        jobAdvertisement={jobAdvertisement}
      />
      <ProgressDialog 
        visible={loading} 
        label="Enviando mensagem..."
      />
    </>
  )
}

export default JobAdvertisementDetailsPage 