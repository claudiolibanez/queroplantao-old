import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { LoginManager, AccessToken } from 'react-native-fbsdk'

import {
  Alert,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native'

import PageContainer from '../../components/PageConainter'
import LoginButton from '../../components/Button/LoginButton'
import QueroPlantaoLogoVertical from '../../components/SVGs/QueroPlantaoLogoVertical'
import FacebookLogo from '../../components/SVGs/FacebookLogo'
import GoogleLogo from '../../components/SVGs/GoogleLogo'
import EmailLogo from '../../components/SVGs/EmailLogo'

import Screens from '../../constants/Screens'
import { AppContext } from '../../components/AppContext'

import styles from './styles'

function SignInPage() {
  const navigation = useNavigation()
  const appContext = useContext(AppContext)

  const facebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])

      if (result.isCancelled) {
        console.log('User cancelled the login process')
      }

      const data = await AccessToken.getCurrentAccessToken()

      if (!data) {
        console.log('Something went wrong obtaining access token')
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken)

      const subscriber = await auth().signInWithCredential(facebookCredential)

      const { email, name } = subscriber.additionalUserInfo.profile

      appContext.setSignUpUser({ email, name })

      return subscriber
    } catch (err) {
      console.log(err)
      return null
    }
  }

  const googleLogin = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn()

      const googleCredential = auth.GoogleAuthProvider.credential(idToken)

      const subscriber = await auth().signInWithCredential(googleCredential)

      const { email, name } = subscriber.additionalUserInfo.profile

      appContext.setSignUpUser({ email, name })

      return subscriber
    } catch (err) {
      console.log(err)
      return null
    }
  }

  const handleToLink = async () => {
    const url = 'https://queroplantao.com.br/politica-de-privacidade.html'

    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }

  return (
    <PageContainer>
      <ScrollView style={styles.root}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <QueroPlantaoLogoVertical width={200} height={200} />
          </View>
          {/* <View style={styles.titleContainer}>
            <Text style={styles.subTitle}>
              Publique e busque vagas de plantão médico em todo Brasil.
            </Text>
          </View> */}
          <View style={{ width: '100%' }}>
            <LoginButton
              icon={<GoogleLogo />}
              text="Entrar com Google"
              onPress={googleLogin}
            />
            <LoginButton
              icon={<FacebookLogo />}
              text="Entrar com Facebook"
              onPress={facebookLogin}
            />
            <LoginButton
              icon={<EmailLogo />}
              text="Entrar com Email"
              onPress={() => navigation.push(Screens.EmailSignIn)}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {'Ao continuar, você concorda com os '}
        </Text>
        <TouchableOpacity onPress={handleToLink}>
          <Text style={styles.textButton}>
            Termos de uso
          </Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          {' do Quero Plantão e confirma que leu nossa '}
        </Text>
        <TouchableOpacity onPress={handleToLink}>
          <Text style={styles.textButton}>
            Política de privacidade.
          </Text>
        </TouchableOpacity>
      </View>

    </PageContainer>
  )
}

export default SignInPage