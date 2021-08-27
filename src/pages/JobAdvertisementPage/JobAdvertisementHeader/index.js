import React from 'react'

import {
  View,
  Text,
} from 'react-native'

import styles from './styles'

function JobAdvertisementHeader() {
  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titlePrimary}>
          Anúncios
        </Text>
      </View>
    </View>
  )
}

export default JobAdvertisementHeader