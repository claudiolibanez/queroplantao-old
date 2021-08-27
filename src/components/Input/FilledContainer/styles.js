import {
  StyleSheet,
} from 'react-native'

import { fontFamily, palette } from '../../Theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginBottom: 6,
    marginHorizontal: 12,
  },
  label: {
    fontSize: 14,
    fontFamily: fontFamily.PromptSemiBold,
    color: palette.secondary.main,
    marginBottom: 4
  },
  errorLabel: {
    color: palette.error.dark
  },
  inputContainer: {
    borderBottomWidth: 1.5,
    borderBottomColor: palette.primary.main,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 6,
  },
  helperTextContainer: {
    paddingTop: 4,
    paddingHorizontal: 2
  },
  helperText: {
    fontSize: 12,
    color: palette.secondary.dark,
    fontFamily: fontFamily.OverpassRegular
  },
  errorHelperText: {
    color: palette.error.main 
  }
})

export default styles