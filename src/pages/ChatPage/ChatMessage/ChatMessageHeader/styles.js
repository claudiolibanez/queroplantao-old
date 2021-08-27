import { StyleSheet } from 'react-native'

import { palette } from '../../../../components/Theme'

const styles = StyleSheet.create({
  root: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#e1f4fb',
    elevation: 1
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 13,
    color: palette.textSecondary,
  }
})

export default styles