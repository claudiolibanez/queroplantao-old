import {
  StyleSheet,
} from 'react-native'

import { palette, fontFamily } from '../../../../components/Theme'

const styles = StyleSheet.create({
  title: {
    fontFamily: fontFamily.PromptBold,
    fontSize: 16,
    color: palette.textPrimary
  },
  subTitle: {
    fontFamily: fontFamily.OverpassBold,
    fontSize: 15,
    color: palette.textSecondary
  },
  caption: {

  }
})

export default styles