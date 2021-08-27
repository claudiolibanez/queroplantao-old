import React from 'react'
import PropTypes from 'prop-types'
import IconFeather from 'react-native-vector-icons/Feather'

import {
  View,
} from 'react-native'

import { IconButton } from '../../../Button'
 
import styles from './styles'

function ForwardHeader({ onClose, title }) {
  return (
    <View style={styles.header}>
      <IconButton onPress={onClose} style={styles.iconButton}>
        <IconFeather name="arrow-left" size={24} />
      </IconButton>
      <View style={styles.titleContainer}>
        {title}
      </View>
    </View>
  )
}

ForwardHeader.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node
}

ForwardHeader.defaultProps = {
  title: null
}

export default ForwardHeader