import {
  StyleSheet,
} from 'react-native'

import { palette } from '../../Theme'

const styles = StyleSheet.create({
  fabButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#00213B',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    },
  },
  menu: {
    backgroundColor: palette.primary.dark,
  },
})

export default styles