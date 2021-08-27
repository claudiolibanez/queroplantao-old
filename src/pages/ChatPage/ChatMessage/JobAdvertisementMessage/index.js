import React from 'react'
import PropTypes from 'prop-types'
import firestore from '@react-native-firebase/firestore'

import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native'

import collectionNames from '../../../../constants/Firestore'

import MessageBase from '../MessageBase'
import { capitalizeTheFirstLetterOfEachWord } from '../../../../utils'

import jobImage from '../../../../assets/img/job.png'

import styles from './styles'

function JobAdvertisementMessage({ message }) {
  const {
    jobAdvertiseTitle,
    jobAdvertiseLocationCity,
    jobAdvertiseLocationDescription,
  } = message

  const handleUserPress = () => {}

  const handleNavigationToJobAdvertisementDetailsPage = () => {
    // firestore()
    //   .collection(collectionNames.JOBADVERTISEMENTS)
    //   .doc()
  }

  return (
    <MessageBase
      message={message} 
      onUserPress={handleUserPress}
    >
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: 60, height: 60, padding: 8, borderRadius: 4, backgroundColor: 'white' }}>
          <Image source={jobImage} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
        </View>
        <View style={{ marginHorizontal: 12, width: 120 }}>
          <Text 
            style={styles.title}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {capitalizeTheFirstLetterOfEachWord(jobAdvertiseTitle)}
          </Text>
          <Text 
            style={styles.subTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {capitalizeTheFirstLetterOfEachWord(jobAdvertiseLocationCity)}
          </Text>
          <Text 
            style={styles.subTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {capitalizeTheFirstLetterOfEachWord(jobAdvertiseLocationDescription)}
          </Text>
        </View>
      </View>
    </MessageBase>
  )
}

JobAdvertisementMessage.propTypes = {
  message: PropTypes.object.isRequired,
}

export default JobAdvertisementMessage