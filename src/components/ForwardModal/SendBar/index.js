import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet
} from 'react-native'

import Typography from '../../Typography'
import { TextButton } from '../../Button'
import { palette } from '../../Theme'

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: palette.primary.dark,
  },
  text: {
    flexShrink: 1,
    color: '#fff'
  }
})

function SendBar({ text, onPress }) {
  return (
    <View style={styles.root}>
      <Typography numberOfLines={2} variant="caption" style={styles.text}>
        {text}
      </Typography>
      <TextButton 
        title="Enviar"
        color={palette.white}
        onPress={onPress}
      />
    </View>
  )
}

SendBar.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default SendBar