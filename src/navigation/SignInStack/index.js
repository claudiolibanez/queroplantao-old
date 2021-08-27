import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import RootPage from '../../pages/RootPage'
import ChatPage from '../../pages/ChatPage'
import GroupsPage from '../../pages/GroupsPage'
import GroupMembersFormPage from '../../pages/GroupMembersFormPage'
import GroupFormPage from '../../pages/GroupFormPage'
import JobAdvertisementFormPage from '../../pages/JobAdvertisementFormPage'
import JobAdvertisementDetailsPage from '../../pages/JobAdvertisementDetailsPage'
import ProfilePage from '../../pages/ProfilePage'
import JobAdvertisementListPage from '../../pages/JobAdvertisementListPage'

import Screens from '../../constants/Screens'

const Stack = createStackNavigator()

function SignInStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.Home}
        headerMode="none"
      >
        <Stack.Screen
          name={Screens.Home}
          component={RootPage}
        />
        <Stack.Screen
          name={Screens.Chat}
          component={ChatPage}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
        <Stack.Screen
          name={Screens.JobAdvertisementFormPage}
          component={JobAdvertisementFormPage}
        />
        <Stack.Screen
          name={Screens.JobAdvertisementDetailsPage}
          component={JobAdvertisementDetailsPage}
        />
        <Stack.Screen
          name={Screens.GroupsPage}
          component={GroupsPage}
        />
        <Stack.Screen
          name={Screens.GroupMembersFormPage}
          component={GroupMembersFormPage}
        />
        <Stack.Screen
          name={Screens.GroupFormPage}
          component={GroupFormPage}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        />
        <Stack.Screen
          name={Screens.ProfilePage}
          component={ProfilePage}
        />
        <Stack.Screen
          name={Screens.JobAdvertisementListPage}
          component={JobAdvertisementListPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SignInStack