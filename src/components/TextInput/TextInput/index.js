import React from 'react'
import PropTypes from 'prop-types'

import {
  StyleSheet,
  TextInput as RNTextInput
} from 'react-native'

import InputContainer from '../InputContainer'
import { palette, fontFamily } from '../../Theme'

const styles = StyleSheet.create({
  input: {
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 0,
    paddingBottom: 0,
    height: 40,
    fontSize: 16,
    color: 'black',
    fontFamily: fontFamily.OverpassRegular,
    flexGrow: 1
  },
})

const TextInput = React.forwardRef((props, ref) => {
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
        selectionColor={palette.border}
        style={styles.input}
      />
    </InputContainer>
  )
})

TextInput.propTypes = {
  ...TextInput.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

TextInput.defaultProps = {
  style: null,
  error: false,
  helperText: null,
}

export default TextInput