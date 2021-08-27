import {
  StyleSheet,
} from 'react-native'

import { palette, fontFamily } from '../../components/Theme'

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: palette.primary.main,
    height: 3
  },
  label: {
    fontFamily: fontFamily.PromptMedium
  }
})

export default styles