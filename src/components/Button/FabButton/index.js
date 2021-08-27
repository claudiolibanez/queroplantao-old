import React from 'react'
import PropTypes from 'prop-types'
import IconFeather from 'react-native-vector-icons/Feather'

import {
  View,
  TouchableWithoutFeedback,
} from 'react-native'

import styles from './styles'

function FabButton({ icon, style, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.fabButton, styles.menu, style]}>
        <IconFeather name={icon} size={28} color="#fff" />
      </View>
    </TouchableWithoutFeedback>
  )
}

FabButton.propTypes = {
  icon: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  onPress: PropTypes.func.isRequired,
}

FabButton.defaultProps = {
  style: null,
}

export default FabButton