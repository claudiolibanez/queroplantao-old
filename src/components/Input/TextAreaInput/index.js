import React from 'react'
import PropTypes from 'prop-types'

import {
  TextInput as RNTextInput
} from 'react-native'

import { palette } from '../../Theme'

import InputContainer from '../InputContainer'

import styles from './styles'

const TextAreaInput = React.forwardRef((props, ref) => {
  const { style, label, error, helperText, ...others } = props
  return (
    <InputContainer
      style={style}
      label={label}
      error={error}
      helperText={helperText}
    >
      <RNTextInput
        {...others}
        ref={ref}
        multiline
        maxLength={255}
        keyboardType="default"
        autoCorrect={false}
        selectionColor={palette.black}
        style={styles.input}
      />
    </InputContainer>
  )
})

TextAreaInput.propTypes = {
  ...TextAreaInput.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

TextAreaInput.defaultProps = {
  style: null,
  label: null,
  error: false,
  helperText: null,
}

export default TextAreaInput