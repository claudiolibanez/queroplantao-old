import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  TextInput,
} from 'react-native'

import styles from './styles'

function FilledContainer({ children, style, label, error, helperText }) {
  return (
    <View style={[styles.root, style]}>
      {label && (
        <Text style={[styles.label, error && styles.errorLabel]}>
          {label}
        </Text>
      )}
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

FilledContainer.propTypes = {
  ...TextInput.propTypes,
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

FilledContainer.defaultProps = {
  style: null,
  label: null,
  error: false,
  helperText: null,
}

export default FilledContainer