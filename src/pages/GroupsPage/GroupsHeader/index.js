import React from 'react'

import {
  View,
  Text,
} from 'react-native'

import styles from './styles'

function GroupsHeader() {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titlePrimary}>
          Grupos
        </Text>
      </View>
    </View>
  )
}

export default GroupsHeader