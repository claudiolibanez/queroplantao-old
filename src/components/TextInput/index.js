import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  root: {
    marginBottom: 16,
    borderBottomWidth: 1.5,
    borderColor: 'rgba(0, 0, 0, 0.25)'
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  input: {
    height: 32,
    fontSize: 16,
    fontWeight: '700',
    color: '#000'
  }
})

function TextInputBase({ label, ...others }) {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        {...others}
        selectionColor="#0155fb"
        style={styles.input}
      />
    </View>
  )
}

TextInputBase.propTypes = {
  label: PropTypes.string.isRequired
}

export default TextInputBase