import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native'

import InputContainer from '../InputContainer'
import { fontFamily, palette } from '../../Theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    height: 40,
    paddingHorizontal: 8
  },
  text: {
    flexShrink: 1,
    fontSize: 16,
    color: 'black',
    fontFamily: fontFamily.OverpassRegular,
  },
  icon: {
    paddingLeft: 4
  }
})

function SelectContainer({ onPress, numberOfLines, style, label, error, helperText, value }) {
  return (
    <Pressable onPress={onPress}>
      <InputContainer 
        style={style}
        label={label}
        error={error}
        helperText={helperText}
      >
        <View style={styles.root}>
          <Text 
            style={styles.text}
            numberOfLines={numberOfLines}
          >
            {value === '' ? 'Selecione uma opção' : value}
          </Text>
          <Icon 
            name="arrow-drop-down" 
            size={26} 
            color={palette.secondary.light}
            style={styles.icon}
          />
        </View>
      </InputContainer>
    </Pressable>
  )
}

SelectContainer.propTypes = {
  onPress: PropTypes.func,
  numberOfLines: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.string
}

SelectContainer.defaultProps = {
  onPress: () => {},
  numberOfLines: 1,
  style: null,
  error: false,
  helperText: null,
  value: ''
}

export default SelectContainer