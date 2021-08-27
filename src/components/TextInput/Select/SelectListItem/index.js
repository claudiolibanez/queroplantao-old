import React from 'react'
import PropTypes from 'prop-types'
import FeatherIcon from 'react-native-vector-icons/Feather'

import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native'

import { fontFamily, palette } from '../../../Theme'

const styles = StyleSheet.create({
  root: {
    height: 48,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    flexShrink: 1,
    fontFamily: fontFamily.OverpassSemiBold,
    fontSize: 16,
    color: '#000'
  },
  icon: {
    marginLeft: 12
  }
})

function SelectListItem({ title, checked, onPress }) {
  return (
    <Pressable 
      onPress={onPress}
      android_ripple={{ color: palette.hoverOpacity, radius: 180 }}
    >
      <View style={styles.root}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        {checked && (
          <FeatherIcon style={styles.icon} name="check" size={26} color={palette.primary.main} />
        )}
      </View>
    </Pressable>
  )
}

SelectListItem.propTypes = {
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
}

export default SelectListItem