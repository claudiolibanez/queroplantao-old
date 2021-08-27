import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import { fontFamily } from '../../Theme'

const styles = StyleSheet.create({
  root: {
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.075)',
    borderStyle: 'solid',
    borderRadius: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    letterSpacing: 0.5,
    fontSize: 15,
    fontFamily: fontFamily.PromptSemiBold,
  }
})

function LoginButton({ text, icon, ...others }) {
  return (
    <TouchableOpacity {...others}>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          {icon}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>
            {text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

LoginButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}

export default LoginButton