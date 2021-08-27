import {
  StyleSheet,
} from 'react-native'

import { palette, fontFamily } from '../../components/Theme'

const styles = StyleSheet.create({
  content: {
    marginTop: 32,
  },
  menuLabelContainer: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 6
  },
  menuLabel: {
    fontFamily: fontFamily.OverpassExtraBold,
    fontSize: 14,
    color: palette.primary.light,
  },
  divider: {
    height: 1, 
    backgroundColor: '#f0f0f0', 
    marginHorizontal: 12, 
  }
})

export default styles