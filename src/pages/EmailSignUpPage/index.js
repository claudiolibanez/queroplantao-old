import React, { useRef, useState, useContext } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import * as yup from 'yup'
import { Formik } from 'formik'

import {
  View,
  ScrollView,
} from 'react-native'  

import PageConainter from '../../components/PageConainter'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput/TextInput'
import Typography from '../../components/Typography'
import { ContainedButton } from '../../components/Button'
import { AppContext } from '../../components/AppContext'
import Screens from '../../constants/Screens'

import styles from './styles'

function EmailSignUpPage() {
  const { params } = useRoute()
  const navigation = useNavigation()
  
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState('')

  const appContext = useContext(AppContext)
  const passwordInputRef = useRef()
  const nameInputRef = useRef()

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('Email inválido'),
    password: yup
      .string()
      .required('A senha deve ter pelo menos 8 caracteres')
      .min(8, 'A senha deve ter pelo menos 8 caracteres'),
    name: yup
      .string()
      .required('Nome completo inválido')
  })

  const onSubmit = async ({ email, password, name }) => {
    try {
      setLoading(true)
      appContext.setSignUpUser({ email, name })
      const subscriber = await auth().createUserWithEmailAndPassword(email, password)

      return () => subscriber()
    } catch ({ code }) {
      console.log(code)
      if (code === 'auth/email-already-in-use') {
        setLoading(false)
        navigation.navigate(Screens.PasswordSignIn, { email })
      }

      setLoading(false)
      // setError('Senha incorreta')
    }

    return null
  }

  return (
    <PageConainter>
      <Header backButton />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.titleContainer}>
          <Typography
            variant="pageTitle"
            gutterBottom
          >
            Crie sua conta
          </Typography>
          <Typography
            variant="subTitle"
            gutterBottom
          >
            Crie sua conta no Quero Plantão para ter acesso vagas de plantões
            e encontrar médicos.
          </Typography>
        </View>
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={{ email: params.email || '', password: '', name: '' }}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <View style={styles.formContainer}>
              <TextInput
                error={Boolean(errors.email)}
                helperText={errors.email}
                label="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                autoCompleteType="email"
                clearButtonMode="while-editing"
                textContentType="emailAddress"
                returnKeyType="next"
                returnKeyLabel="next"
                cleareable
                onChangeText={handleChange('email')}
                onSubmitEditing={() => passwordInputRef.current.focus()}
                value={values.email}
                style={styles.input}
              />
              <TextInput
                autoFocus
                error={Boolean(errors.password)}
                helperText={Boolean(errors.password) && errors.password}
                label="Senha"
                autoCapitalize="none"
                autoCompleteType="password"
                textContentType="password"
                clearButtonMode="while-editing"
                returnKeyType="next"
                returnKeyLabel="next"
                secureTextEntry
                cleareable
                onChangeText={handleChange('password')}
                onSubmitEditing={() => nameInputRef.current.focus()}
                value={values.password}
                style={styles.input}
                ref={passwordInputRef}
              />
              <TextInput
                error={Boolean(errors.name)}
                helperText={Boolean(errors.name) && errors.name}
                label="Nome completo"
                autoCompleteType="name"
                clearButtonMode="while-editing"
                textContentType="name"
                returnKeyType="done"
                returnKeyLabel="done"
                onSubmitEditing={handleSubmit}
                cleareable
                onChangeText={handleChange('name')}
                value={values.name}
                style={styles.input}
                ref={nameInputRef}
              />
              <ContainedButton
                onPress={handleSubmit}
                title="Continuar"
                disabled={!values.email || !values.password || !values.name}
                loading={loading}
                block
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </PageConainter>
  )
}

export default EmailSignUpPage