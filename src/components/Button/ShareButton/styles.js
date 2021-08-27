import { StyleSheet } from 'react-native'

import { palette } from '../../Theme'

const styles = StyleSheet.create({
  modalRoot: {

  },
  selectHeader: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: palette.hoverOpacity
  },
  closeButton: {
    position: 'absolute',
    left: 2
  },
  clearButton: {
    position: 'absolute',
    right: 2
  }
})

export default styles