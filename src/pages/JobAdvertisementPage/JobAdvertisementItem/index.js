import React from 'react'
import PropTypes from 'prop-types'
import { RectButton } from 'react-native-gesture-handler'

import { 
  View,
} from 'react-native'

import { 
  getDayofWeekWithDate,
  parseHour,
  capitalizeTheFirstLetterOfEachWord,
} from '../utils'

// import {
//   parseHour,
//   capitalizeTheFirstLetterOfEachWord
// } from '../../../utils'

import Typography from '../../../components/Typography'

import { styles } from './styles'

function JobAdvertisementItem({ jobAdvertisement, onPress }) {
  const {
    title,
    startWhenDate,
    startWhenTime,
    specialty
  } = jobAdvertisement

  return (
    <RectButton onPress={onPress}>
      <View style={styles.itemContainer}>
        <View style={styles.itemDateContainer}>
          <Typography variant="dateLabel">
            {getDayofWeekWithDate(startWhenDate)}
          </Typography>
          <Typography variant="dateLabel">
            {parseHour(startWhenTime)}
          </Typography>
        </View>
        <View style={styles.itemDivider} />
        <View style={styles.itemDescription}>
          <Typography 
            variant="title" 
            numberOfLines={1} 
            ellipsizeMode="tail"
          >
            {capitalizeTheFirstLetterOfEachWord(title)}
          </Typography>
          <Typography 
            variant="subtitle" 
            numberOfLines={1} 
            ellipsizeMode="tail"
          >
            {capitalizeTheFirstLetterOfEachWord(specialty)}
          </Typography>
          <Typography 
            variant="caption" 
            numberOfLines={1} 
            ellipsizeMode="tail"
          >
            {capitalizeTheFirstLetterOfEachWord(jobAdvertisement.location.description)}
          </Typography>
        </View>
      </View>
    </RectButton>
  )
}

JobAdvertisementItem.propTypes = {
  jobAdvertisement: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
} 

export default JobAdvertisementItem