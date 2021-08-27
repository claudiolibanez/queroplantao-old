import React from 'react'
import PropTypes from 'prop-types'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'

import {
  View,
  Text,
} from 'react-native'

import { palette } from '../../../components/Theme'

import styles from './styles'

function TextContainer({ children, icon, style, label }) {
  return (
    <View style={[styles.root, style]}>
      <View style={styles.labelContainer}>
        {icon && (
          <IconMaterialIcons name={icon} size={16} color={palette.primary.main} />
        )}
        <Text style={styles.label}>
          {label}
        </Text>
      </View>
      <View style={styles.textContainer}>
        {children}
      </View>
    </View>
  )
}

TextContainer.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  label: PropTypes.string.isRequired,
}

TextContainer.defaultProps = {
  style: null,
  icon: null,
}

export default TextContainer