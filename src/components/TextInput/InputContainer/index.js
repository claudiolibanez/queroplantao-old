import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native'

import { palette, fontFamily } from '../../Theme'

const styles = StyleSheet.create({
  root: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: fontFamily.PromptSemiBold,
    color: palette.secondary.main,
    marginBottom: 4
  },
  errorLabel: {
    color: palette.error.dark
  },
  inputContainer: {
    borderWidth: 1.5,
    borderColor: '#f1f1f1',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  errorInputContainer: {
    borderColor: palette.error.light
  },
  clearButton: {
    position: 'absolute',
    right: 4,
    bottom: 8
  },
  clearContainer: {
    width: 24,
    height: 24,
    backgroundColor: 'blue'
  },
  helperTextContainer: {
    paddingTop: 4,
    paddingHorizontal: 2
  },
  helperText: {
    fontSize: 12,
    color: palette.secondary.dark,
    fontFamily: 'OverpassRegular'
  },
  errorHelperText: {
    color: palette.error.main 
  }
})

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