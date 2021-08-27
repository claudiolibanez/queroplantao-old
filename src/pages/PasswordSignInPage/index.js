import React, { 
  useState, 
} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import * as yup from 'yup'
import { Formik } from 'formik'

import {
  View,
  ScrollView,
} from 'react-native'

import Screens from '../../constants/Screens'

import PageConainter from '../../components/PageConainter'
import Header from '../../components/Header'
import { ContainedButton, TextButton } from '../../components/Button'
import TextInput from '../../components/TextInput/TextInput'
import Typography from '../../components/Typography'

import styles from './styles'
 
function PasswordSignInPage() {
  const navigation = useNavigation()
  const { params } = useRoute()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const schema = yup.object().shape({
    password: yup
      .string()
      .required('Insira sua senha')
  })

  const onSubmit = async ({ password }) => {
    const { email } = params
    
    try {
      setLoading(true)
      const subscriber = await auth().signInWithEmailAndPassword(email, password)

      return () => subscriber()
    } catch ({ code }) {
      console.log(code)
      if (code === 'auth/unknown') {
        setLoading(false)
        console.log(code)
        // 
      } else if (code === 'auth/wrong-password') {
        setLoading(false)
        console.log(code)
        // 
      }

      setLoading(false)
      setError('Senha incorreta')
    }
    
    return () => null
  }

  const handleNavigationToForgotPassword = () => {
    navigation.navigate(Screens.ForgotPasswordPage, { email: params.email || '' })
  }

  return (
    <PageConainter>
      <Header backButton />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.titleContainer}>
          <Typography
            variant="pageTitle"
            gutterBottom
          >
            Você já possui conta
          </Typography>
          <Typography
            variant="subTitle"
            gutterBottom
          >
            Digite sua senha para fazer login na sua conta.
          </Typography>
        </View>
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={{ password: '' }}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <View style={styles.formContainer}>
              <TextInput
                autoFocus
                error={Boolean(errors.password) || Boolean(error)}
                helperText={(Boolean(errors.password) || Boolean(error))
                  && (errors.password || error)}
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
                value={values.password}
                style={styles.input}
              />
              <TextButton
                onPress={handleNavigationToForgotPassword}
                title="Esqueceu a senha?"
                style={styles.forgotPasswordButton}
              />
              <ContainedButton
                onPress={handleSubmit}
                title="Entrar"
                disabled={!values.password}
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

export default PasswordSignInPage 