import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native'

import { useCurrentUser } from '../../../models/User'

import doctorImg from '../../../assets/img/doctor.jpg'

import styles from './styles'

function AccountHeader({ onPress: handleNavigationToProfile }) {
  const [user] = useCurrentUser()

  const {
    avatarUrl,
    name
  } = user

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image 
            source={avatarUrl ? { uri: avatarUrl } : doctorImg} 
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titlePrimary}>
            {name}
          </Text>
          <TouchableWithoutFeedback onPress={handleNavigationToProfile}>
            <Text style={styles.subtitleSecundary}>
              Editar Perfil
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  )
}

AccountHeader.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default AccountHeader