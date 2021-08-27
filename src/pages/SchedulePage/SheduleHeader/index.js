import React from 'react'

import {
  View,
  Text,
} from 'react-native'

import styles from './styles'

function ScheduleHeader() {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titlePrimary}>
          Agenda
        </Text>
      </View>
    </View>
  )
}

export default ScheduleHeader