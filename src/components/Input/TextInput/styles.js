import {
  StyleSheet,
} from 'react-native'

import { fontFamily } from '../../Theme'

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 4,
    paddingTop: 0,
    paddingBottom: 0,
    height: 40,
    fontSize: 16,
    color: 'black',
    fontFamily: fontFamily.OverpassRegular,
    flexGrow: 1,
  },
})

export default styles