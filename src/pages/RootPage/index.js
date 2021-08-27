import React from 'react'
import { 
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'

import PageContainer from '../../components/PageConainter'
import TabIcon from './TabIcon'

import MessagesPage from '../MessagesPage'
import SchedulePage from '../SchedulePage'
import JobAdvertisementPage from '../JobAdvertisementPage'
import AccountPage from '../AccountPage'
import GroupsPage from '../GroupsPage'

import { palette } from '../../components/Theme'

import styles from './styles'

const { Navigator, Screen } = createBottomTabNavigator()

function RootPage() {
  return (
    <PageContainer>
      <Navigator
        initialRouteName="Mensagens"
        screenOptions={({ route }) => ({
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <TabIcon 
              route={route}
              color={color}
              size={size}
            />
          )
        })}
        tabBarOptions={{
          activeTintColor: palette.primary.dark,
          inactiveTintColor: palette.primary.light,
          labelStyle: styles.label
        }}
      >
        <Screen name="Mensagens" component={MessagesPage} />
        <Screen name="Grupos" component={GroupsPage} />
        <Screen name="Anúncios" component={JobAdvertisementPage} />
        <Screen name="Conta" component={AccountPage} />
        {/* <Screen name="Conta" component={AccountPage} /> */}
      </Navigator>
    </PageContainer>
  )
}

export default RootPage