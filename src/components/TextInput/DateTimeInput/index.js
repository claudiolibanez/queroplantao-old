import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import DateTimePicker from '@react-native-community/datetimepicker'
import { format } from 'date-fns'

import {
  StyleSheet,
  Pressable,
  Text,
  Platform,
  View
} from 'react-native'

import InputContainer from '../InputContainer'
import { fontFamily } from '../../Theme'

const styles = StyleSheet.create({
  text: {
    flexShrink: 1,
    fontSize: 16,
    color: 'black',
    fontFamily: fontFamily.OverpassRegular,
    textAlignVertical: 'center',
    height: 40,
  },
  root: {
    flex: 1
  }
})

function DateTimeInput({
  style,
  onChange,
  value,
  mode,
  label,
  error,
  helperText,
  minimumDate,
  maximumDate,
  minuteInterval,
  ...others
}) {
  const [open, setOpen] = useState(false)

  const inputValue = useMemo(() => {
    switch (mode) {
    case 'date':
      return format(value, 'dd/MM/yyyy')
    case 'time':
      return format(value, 'HH:mm')
    default:
      return format(value, 'dd/MM/yyyy')
    }
  }, [value])

  const handleChange = (e, date) => {
    const currentDate = date || value

    if (open) {
      setOpen(Platform.OS === 'ios')
    }
    onChange(currentDate)
  }

  return (
    <View style={styles.root}>
      <Pressable onPress={() => setOpen(true)}>
        <InputContainer
          label={label}
          error={error}
          helperText={helperText}
          style={style}
          {...others}
        >
          <Text
            style={styles.text}
            numberOfLines={1}
          >
            {inputValue}
          </Text>
        </InputContainer>
      </Pressable>
      {open && (
        <DateTimePicker
          mode={mode}
          value={value}
          onChange={handleChange}
          display="default"
          minuteInterval={minuteInterval}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          is24Hour
        />
      )}
    </View>
  )
}

DateTimeInput.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  value: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['date', 'time']),
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  minuteInterval: PropTypes.number,
  maximumDate: PropTypes.instanceOf(Date),
  minimumDate: PropTypes.instanceOf(Date),
}

DateTimeInput.defaultProps = {
  style: null,
  mode: 'date',
  error: false,
  helperText: false,
  minuteInterval: 1,
  maximumDate: undefined,
  minimumDate: undefined,
}

export default DateTimeInput