import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

GoogleSignin.configure({
  webClientId: '825064735784-h8626pjrm4hqdcuput43qn9urefucnd0.apps.googleusercontent.com',
})

AppRegistry.registerComponent(appName, () => App)
