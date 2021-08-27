import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
} from 'react-native'

import MessageBase from '../MessageBase'

import styles from './styles'

function TextMessage({ message }) {
  const { text, isBlocked } = message

  const handleUserPress = () => { }
  return (
    <MessageBase 
      message={message}
      onUserPress={handleUserPress}
    >
      <View style={styles.body}>
        <Text style={[styles.text, isBlocked && { color: '#a6a9ad' }]}>
          {text}
        </Text>
      </View>
    </MessageBase>
  )
}

TextMessage.propTypes = {
  message: PropTypes.object.isRequired,
}

export default TextMessage