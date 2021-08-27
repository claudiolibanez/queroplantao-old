import { StyleSheet } from 'react-native'

import { palette, fontFamily } from '../../../../components/Theme'

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
  },
  text: {
    fontSize: 16,
    color: '#000',
    alignSelf: 'flex-start',
    fontFamily: fontFamily.OverpassRegular
  },
  date: {
    fontSize: 12,
    color: palette.textSecondary,
    alignSelf: 'flex-end'
  },
  menu: {
    backgroundColor: '#fff'
  }
})

export default styles