import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import * as yup from 'yup'
import { Formik } from 'formik'

import {
  View,
  ScrollView
} from 'react-native'

import PageConainter from '../../components/PageConainter'
import Header from '../../components/Header'
import TextInput from '../../components/TextInput/TextInput'
import Typography from '../../components/Typography'
import { ContainedButton } from '../../components/Button'
import Screens from '../../constants/Screens'

import styles from './styles'

function EmailSignInPage() {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('Email inválido')
  })

  const onSubmit = ({ email }) => {
    setLoading(true)

    auth().signInWithEmailAndPassword(email, 'f4kePassw0rd')
      .catch(({ code }) => {
        if (code === 'auth/user-not-found') {
          setLoading(false)
          navigation.navigate(Screens.EmailSignUp, { email })
        } else {
          setLoading(false)
          navigation.navigate(Screens.PasswordSignIn, { email })
        }
      })
  }

  return (
    <PageConainter>
      <Header backButton />
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.titleContainer}>
          <Typography
            style={styles.title}
            variant="pageTitle"
            gutterBottom
          >
            Entrar com email
          </Typography>
          <Typography
            variant="subTitle"
            gutterBottom
          >
            Digite seu email para entrar em sua conta ou criar uma nova.
          </Typography>
        </View>
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={{ email: '' }}
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
      </ScrollView>
    </PageConainter>
  )
}

export default EmailSignInPage