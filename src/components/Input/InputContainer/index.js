import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  TextInput,
} from 'react-native' 

import styles from './styles'

function InputContainer({ children, style, label, error, helperText }) {
  return (
    <View style={[styles.root, style]}>
      <Text style={[styles.label, error && styles.errorLabel]}>
        {label}
      </Text>
      <View style={[styles.inputContainer, error && styles.errorInputContainer]}>
        {children}
      </View>
      <View style={styles.helperTextContainer}>
        {helperText && (
          <Text style={[styles.helperText, error && styles.errorHelperText]}>
            {helperText}
          </Text>
        )}
      </View>
    </View>
  )
}

InputContainer.propTypes = {
  ...TextInput.propTypes,
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

InputContainer.defaultProps = {
  style: null,
  error: false,
  helperText: null,
}

export default InputContainer