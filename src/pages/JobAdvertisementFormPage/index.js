import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { addDays, setMinutes } from 'date-fns'
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust'
import { useNavigation } from '@react-navigation/native'

import {
  Alert,
  View,
  ScrollView,
} from 'react-native'

import { JobAdvertisementService } from '../../models/JobAdvertisement'
import { useCurrentUser } from '../../models/User'

import PageConainter from '../../components/PageConainter'
import Header from '../../components/Header'
import Typography from '../../components/Typography'
import TextInput from '../../components/TextInput/TextInput'
import ContainedButton from '../../components/Button/ContainedButton'
import SelectLocation from './SelectLocation'
import Select from '../../components/TextInput/Select'
import DateTimeInput from '../../components/TextInput/DateTimeInput'
import CurrencyInput from '../../components/TextInput/CurrencyInput'
import { specialties } from '../../constants/App'

import styles from './styles'

function JobAdvertisementFormPage() {
  const [user] = useCurrentUser()
  const navigation = useNavigation()

  const [minimumDate, setMinimumDate] = useState()

  const schema = yup.object().shape({
    title: yup.mixed().required('Insira um título'),
    description: yup.string(),
    location: yup.mixed().required('Insira uma localização'),
    specialty: yup.mixed().required('Selecione uma especialidade'),
    paymentValue: yup.string().required('Insira o valor do anúncio'),
    paymentObservation: yup.string(),
  })

  const handleOnSubmit = async (data) => {
    const jobAdvertisement = {
      ...data,
      location: {
        ...data.location,
        city: data.location.city.toLowerCase(),
        description: data.location.description.toLowerCase(),
        name: data.location.name.toLowerCase(),
        state: data.location.state.toLowerCase(),
        stateShort: data.location.stateShort.toLowerCase(),
      },
      // specialty: {
      //   ...data.specialty,
      //   title: data.specialty.title.toLowerCase(),
      // }
      specialty: data.specialty.title.toLowerCase()
    }

    // jobAdvertisement.specialty.title

    // const { id } = await JobAdvertisementService.createJobAdvertisement(jobAdvertisement, user)

    await JobAdvertisementService.createJobAdvertisement(jobAdvertisement, user)

    Alert.alert(
      'Anúncio criado com sucesso!', 
      'Acesse seu anúncio na tela de anúncio ou na tela de conta no menu "Meus anúncios"',
    )

    navigation.goBack()

    // navigation.dispatch(
    //   StackActions.replace(RootPage, {
    //     screen: Screens.Home,
    //     params: {
    //       screen: Screens.JobAdvertisementPage
    //     }
    //   })
    // )
  }

  useEffect(() => {
    AndroidKeyboardAdjust.setAdjustPan()
  }, [])

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={schema}
      onSubmit={handleOnSubmit}
      initialValues={{
        title: '',
        description: '',
        location: '',
        specialty: '',
        startWhenDate: addDays(new Date(), 1),
        startWhenTime: setMinutes(new Date(), 0),
        endWhenDate: addDays(new Date(), 2),
        endWhenTime: setMinutes(new Date(), 0),
        paymentValue: 0,
        paymentObservation: ''
      }}
    >
      {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
        <PageConainter>
          <Header backButton />
          <ScrollView keyboardShouldPersistTaps="handled">
            <View style={styles.titleContainer}>
              <Typography
                style={styles.title}
                variant="pageTitle"
                gutterBottom
              >
                Criar anúncio
              </Typography>
            </View>
            <View style={styles.formContainer}>
              <TextInput
                error={Boolean(errors.title)}
                helperText={Boolean(errors.title) && errors.title}
                label="Título do anúncio"
                onChangeText={handleChange('title')}
                value={values.title}
                style={styles.input}
                placeholder="Digite um título"
              />
              <TextInput
                error={Boolean(errors.description)}
                helperText={Boolean(errors.description) && errors.description}
                label="Descrição"
                onChangeText={handleChange('description')}
                value={values.description}
                style={styles.input}
                placeholder="Digite uma descrição (opcional)"
              />
              <SelectLocation
                error={Boolean(errors.location)}
                helperText={Boolean(errors.location) && errors.location}
                onChange={(value) => setFieldValue('location', value)}
                value={values.location}
              />
              <Select
                label="Especialidade"
                onChange={(value) => setFieldValue('specialty', value)}
                error={Boolean(errors.specialty)}
                helperText={Boolean(errors.specialty) && errors.specialty}
                value={values.specialty}
                options={specialties}
                style={styles.input}
              />
              <View style={styles.labelContainer}>
                <Typography variant="label">
                  Data ínicio
                </Typography>
              </View>
              <View style={styles.dateTimeContainer}>
                <DateTimeInput
                  style={styles.dateInput}
                  error={Boolean(errors.startWhenDate)}
                  helperText={Boolean(errors.startWhenDate) && errors.startWhenDate}
                  label="Data"
                  onChange={(value) => {
                    setMinimumDate(value)

                    return setFieldValue('startWhenDate', value)
                  }}
                  value={values.startWhenDate}
                  minimumDate={addDays(new Date(), 1)}
                  maximumDate={addDays(new Date(), 60)}
                />
                <DateTimeInput
                  mode="time"
                  error={Boolean(errors.startWhenTime)}
                  helperText={Boolean(errors.startWhenTime) && errors.startWhenTime}
                  label="Horário"
                  onChange={(value) => setFieldValue('startWhenTime', value)}
                  value={values.startWhenTime}
                  minuteInterval={5}
                />
              </View>
              <View style={styles.labelContainer}>
                <Typography variant="label">
                  Data término
                </Typography>
              </View>
              <View style={styles.dateTimeContainer}>
                <DateTimeInput
                  style={styles.dateInput}
                  error={Boolean(errors.endWhenDate)}
                  helperText={Boolean(errors.endWhenDate) && errors.endWhenDate}
                  label="Data"
                  onChange={(value) => setFieldValue('endWhenDate', value)}
                  value={values.endWhenDate}
                  minimumDate={addDays(new Date(minimumDate), 1)}
                  maximumDate={addDays(new Date(minimumDate), 60)}
                />
                <DateTimeInput
                  mode="time"
                  error={Boolean(errors.endWhenTime)}
                  helperText={Boolean(errors.endWhenTime) && errors.endWhenTime}
                  label="Horário"
                  onChange={(value) => setFieldValue('endWhenTime', value)}
                  value={values.endWhenTime}
                  minuteInterval={5}
                />
              </View>
              <CurrencyInput
                error={Boolean(errors.paymentValue)}
                helperText={Boolean(errors.paymentValue) && errors.paymentValue}
                label="Valor do pagamento"
                onChangeText={handleChange('paymentValue')}
                value={values.paymentValue}
                style={styles.input}
              />
              <TextInput
                error={Boolean(errors.paymentObservation)}
                helperText={Boolean(errors.paymentObservation) && errors.paymentObservation}
                label="Observação do pagamento"
                onChangeText={handleChange('paymentObservation')}
                value={values.paymentObservation}
                style={styles.input}
                placeholder="Opcional"
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
        </PageConainter>
      )}
    </Formik>
  )
}

export default JobAdvertisementFormPage 