import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import Screens from '../../constants/Screens'

import SignInPage from '../../pages/SignInPage'
import EmailSignInPage from '../../pages/EmailSignInPage'
import PasswordSignInPage from '../../pages/PasswordSignInPage'
import ForgotPasswordPage from '../../pages/ForgotPasswordPage'
import EmailSignUpPage from '../../pages/EmailSignUpPage'

const Stack = createStackNavigator()

function NavStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.SignIn}
        headerMode="none"
      >
        <Stack.Screen
          name={Screens.SignIn}
          component={SignInPage}
        />
        <Stack.Screen
          name={Screens.EmailSignIn}
          component={EmailSignInPage}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
          }}
        />
        <Stack.Screen
          name={Screens.PasswordSignIn}
          component={PasswordSignInPage}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
        <Stack.Screen
          name={Screens.ForgotPasswordPage}
          component={ForgotPasswordPage}
        />
        <Stack.Screen
          name={Screens.EmailSignUp}
          component={EmailSignUpPage}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavStack