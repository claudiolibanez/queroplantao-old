import React, {
  useState,
} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as yup from 'yup'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'

import {
  View,
} from 'react-native'

import Screens from '../../constants/Screens'

import PageConainter from '../../components/PageConainter'
import Header from '../../components/Header'
import { ContainedButton } from '../../components/Button'
import TextInput from '../../components/TextInput/TextInput'
import Typography from '../../components/Typography'

import styles from './styles'

function ForgotPasswordPage() {
  const navigation = useNavigation()
  const { params } = useRoute()

  const [loading, setLoading] = useState(false)

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('E-mail inválido')
      .required('Email inválido')
  })

  const onSubmit = ({ email }) => {
    setLoading(true)
    
    try {
      auth().sendPasswordResetEmail(email)
        .then(() => setLoading(false))
        .then(() => {
          navigation.reset({
            routes: [{ name: Screens.SignIn }],
          })
        })
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <PageConainter>
      <Header backButton />
      <View style={styles.titleContainer}>
        <Typography
          variant="pageTitle"
          gutterBottom
        >
          Esqueceu sua senha?
        </Typography>
        <Typography
          variant="subTitle"
          gutterBottom
        >
          Digite seu e-mail para poder recuperar sua senha.
        </Typography>
      </View>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{ email: params.email || '' }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <View style={styles.formContainer}>
            <TextInput
              autoFocus
              error={Boolean(errors.email)}
              helperText={errors.email}
              label="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCompleteType="email"
              clearButtonMode="while-editing"
              textContentType="emailAddress"
              returnKeyType="done"
              returnKeyLabel="done"
              cleareable
              name="email"
              onChangeText={handleChange('email')}
              value={values.email}
              onSubmitEditing={handleSubmit}
              style={styles.input}
            />
            <ContainedButton
              onPress={handleSubmit}
              title="Continuar"
              disabled={!values.email}
              loading={loading}
              block
            />
          </View>
        )}
      </Formik>
    </PageConainter>
  )
}

export default ForgotPasswordPage