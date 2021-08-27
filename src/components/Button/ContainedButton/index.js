import React from 'react'
import PropTypes from 'prop-types'

import {
  ActivityIndicator,
  TouchableHighlight,
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
    backgroundColor: palette.primary.main,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  block: {
    alignSelf: 'auto'
  },
  title: {
    color: palette.primary.contrastText,
    fontFamily: fontFamily.PromptSemiBold,
    letterSpacing: 0.3,
    fontSize: 16
  },
  disabled: {
    backgroundColor: palette.backgroundDisabled
  },
  titleDisabled: {
    color: palette.textDisabled
  }
})

function ContainedButton({ style, disabled, title, block, loading, ...others }) {
  return (
    <TouchableHighlight
      {...others}
      disabled={disabled}
      underlayColor={palette.primary.dark}
      style={[
        styles.button,
        style,
        disabled && styles.disabled,
        block && styles.block
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={palette.primary.light} />
      ) : (
        <Text style={[styles.title, disabled && styles.titleDisabled]}>
          {title}
        </Text>
      )}
    </TouchableHighlight>
  )
}

ContainedButton.propTypes = {
  ...TouchableHighlight.propTypes,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  block: PropTypes.bool,
  loading: PropTypes.bool,
}

ContainedButton.defaultProps = {
  style: null,
  disabled: false,
  block: false,
  loading: false
}

export default ContainedButton