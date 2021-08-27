import React from 'react'
import PropTypes from 'prop-types'

import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

import { palette, fontFamily } from '../../Theme'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    borderRadius: 4,
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  block: {
    alignSelf: 'auto'
  },
  title: {
    fontFamily: fontFamily.PromptSemiBold,
    letterSpacing: 0.3,
  },
  titleMd: {
    fontSize: 16
  },
  titleSm: {
    fontSize: 14
  },
  titleLg: {
    fontSize: 18
  },
  titleDisabled: {
    color: palette.textDisabled
  }
})

function TextButton({ style, disabled, title, block, color, size, ...others }) {
  return (
    <TouchableOpacity
      {...others}
      disabled={disabled}
      style={[
        styles.button,
        style,
        block && styles.block
      ]}
    >
      <Text 
        style={[
          { color },
          styles.title,
          size === 'sm' && styles.titleSm, 
          size === 'md' && styles.titleMd, 
          size === 'lg' && styles.titleLg, 
          disabled && styles.titleDisabled,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

TextButton.propTypes = {
  ...TouchableOpacity.propTypes,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  block: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

TextButton.defaultProps = {
  style: null,
  disabled: false,
  block: false,
  color: palette.black,
  size: 'md'
}

export default TextButton