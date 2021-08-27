import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
} from 'react-native'

import { styles } from './styles'

function ChatSectionHeader({ section }) {
  return (
    <View>
      <View style={styles.sectionHeaderContainer} />
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  )
}

ChatSectionHeader.propTypes = {
  section: PropTypes.object.isRequired,
}

export default ChatSectionHeader