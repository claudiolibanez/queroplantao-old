import {
  StyleSheet,
} from 'react-native'

import { fontFamily } from '../../Theme'

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
    color: 'black',
    fontFamily: fontFamily.OverpassRegular,
    flexGrow: 1,
  },
})

export default styles