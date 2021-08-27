import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import IconFeather from 'react-native-vector-icons/Feather'

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'

import {
  View,
} from 'react-native'

import { useCurrentUser } from '../../../models/User'

import Screens from '../../../constants/Screens'

import QueroPlantao from '../../../components/SVGs/QueroPlantaoLogo'
import { IconButton } from '../../../components/Button'

import styles from './styles'

function MessagesHeader() {
  const [user] = useCurrentUser()
  const navigation = useNavigation()
  
  const [menuOpened, setMenuOpened] = useState(false)

  const handleNavigationToGroupMembers = () => {
    setMenuOpened(false)
    navigation.navigate(Screens.GroupMembersFormPage)
  }

  // const handleNavigationToGroups = () => {
  //   setMenuOpened(false)
  //   navigation.navigate(Screens.GroupsPage)
  // }

  const handleLogout = () => {
    auth().signOut()
  }

  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <QueroPlantao width="152" height="68" />
      </View>
      <View style={styles.buttonContainer}>
        {/* <IconButton style={styles.searchButton} onPress={() => {}}>
          <IconFeather name="search" size={24} color="#000" onPress={() => {}} />
        </IconButton> */}
        <Menu
          opened={menuOpened}
          onBackdropPress={() => setMenuOpened(false)}
          style={styles.menuTrigger}
        >
          <MenuTrigger>
            <IconButton onPress={() => setMenuOpened(true)}>
              <IconFeather name="more-vertical" size={24} color="#000" />
            </IconButton>
          </MenuTrigger>
          <MenuOptions
            optionsContainerStyle={styles.menu}
            customStyles={{ optionText: styles.menuOption }}
          >
            {user.isAdmin && (
              <MenuOption onSelect={handleNavigationToGroupMembers} text="Criar grupo" />
            )}
            {/* <MenuOption onSelect={handleNavigationToGroups} text="Todos os grupos" /> */}
            <MenuOption onSelect={handleLogout} text="Sair" />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  )
}

export default MessagesHeader 