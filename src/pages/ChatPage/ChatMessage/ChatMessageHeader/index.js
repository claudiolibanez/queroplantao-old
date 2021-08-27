import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
} from 'react-native'

import styles from './styles'

function ChatMessageHeader({ title }) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  )
}

ChatMessageHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default React.memo(ChatMessageHeader)