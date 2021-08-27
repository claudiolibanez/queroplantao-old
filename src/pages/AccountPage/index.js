import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Text
} from 'react-native'

import Screens from '../../constants/Screens'

import PageConainter from '../../components/PageConainter'
import AccountHeader from './AccountHeader'
import MenuItem from './MenuItem'

import styles from './styles'

function AccountPage() {
  const navigation = useNavigation()

  const handleNavigationToProfile = () => {
    navigation.navigate(Screens.ProfilePage)
  }

  const handleNavigationToJobAdvertisementListPage = () => {
    navigation.navigate(Screens.JobAdvertisementListPage)
  }

  return (
    <PageConainter>
      <AccountHeader onPress={handleNavigationToProfile} />

      <View style={styles.content}>
        <View style={styles.menuLabelContainer}>
          <Text style={styles.menuLabel}>
            Configurações de conta
          </Text>
        </View>
        <MenuItem 
          label="Meus anúncios"
          icon="arrow-right"
          onPress={handleNavigationToJobAdvertisementListPage}
        />
        <View style={styles.divider} />
      </View>

    </PageConainter>
  )
}

export default AccountPage