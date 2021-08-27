import React from 'react'
import PropTypes from 'prop-types'
import { RectButton } from 'react-native-gesture-handler'
import IconFeather from 'react-native-vector-icons/Feather'

import {
  View,
  Text,
} from 'react-native'

import styles from './styles'

function MenuItem({ label, icon, onPress: handleNavigationToJobAdvertisementListPage }) {
  return (
    <RectButton onPress={handleNavigationToJobAdvertisementListPage}>
      <View style={{ 
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 30,
        alignItems: 'center',
        flexdirection: 'row',
        justifyContent: 'space-between' 
      }}
      >
        <Text style={styles.menuItemText}>
          {label}
        </Text>
        <IconFeather name={icon} size={18} color="black" />
      </View>
    </RectButton>
  )
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default MenuItem