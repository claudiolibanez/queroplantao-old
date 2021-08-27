import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
} from 'react-native'

import { styles } from './styles'

function ChatSectionTabHeader({ section }) {
  return (
    <View>
      <View style={styles.sectionHeaderContainer} />
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  )
}

ChatSectionTabHeader.propTypes = {
  section: PropTypes.object.isRequired,
}

export default ChatSectionTabHeader