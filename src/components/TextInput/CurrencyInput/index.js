import React from 'react'
import PropTypes from 'prop-types'
import { TextInputMask } from 'react-native-masked-text'

import {
  StyleSheet,
} from 'react-native'

import InputContainer from '../InputContainer'
import { palette, fontFamily } from '../../Theme'

const styles = StyleSheet.create({
  input: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    height: 40,
    fontSize: 16,
    color: 'black',
    fontFamily: fontFamily.OverpassRegular,
    flexGrow: 1
  },
})

const CurrencyInput = React.forwardRef((props, ref) => {
  const { style, label, error, helperText, ...others } = props
  return (
    <InputContainer
      style={style}
      label={label}
      error={error}
      helperText={helperText}
    >
      <TextInputMask
        {...others}
        type="money"
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
          suffixUnit: '',
        }}
        ref={ref}
        style={styles.input}
        selectionColor={palette.border}
      />
    </InputContainer>
  )
})

CurrencyInput.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

CurrencyInput.defaultProps = {
  style: null,
  error: false,
  helperText: null,
}

export default CurrencyInput