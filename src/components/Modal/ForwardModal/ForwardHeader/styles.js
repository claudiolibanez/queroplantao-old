import {
  StyleSheet,
} from 'react-native'

import { palette } from '../../../Theme'

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: palette.hoverOpacity
  },
  iconButton: {
    marginHorizontal: 8
  },
  titleContainer: {
    flexGrow: 1
  },
})

export default styles