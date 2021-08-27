import React from 'react'
import PropTypes from 'prop-types'

import {
  TextInput as RNTextInput
} from 'react-native'

import { palette } from '../../Theme'

import FilledContainer from '../FilledContainer'

import styles from './styles'

const TextInput = React.forwardRef((props, ref) => {
  const { style, label, error, helperText, ...others } = props
  return (
    <FilledContainer
      style={style}
      label={label}
      error={error}
      helperText={helperText}
    >
      <RNTextInput
        {...others}
        ref={ref}
        selectionColor={palette.black}
        style={styles.input}
      />
    </FilledContainer>
  )
})

TextInput.propTypes = {
  ...TextInput.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  label: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

TextInput.defaultProps = {
  style: null,
  label: null,
  error: false,
  helperText: null,
}

export default TextInput