import {
  StyleSheet,
} from 'react-native'

import { fontFamily, palette } from '../../Theme'

const styles = StyleSheet.create({
  root: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: fontFamily.PromptSemiBold,
    color: palette.secondary.main,
    marginBottom: 16
  },
  errorLabel: {
    color: palette.error.dark
  },
  inputContainer: {
    borderWidth: 1.5,
    borderColor: '#f1f1f1',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 3,
    height: 100
  },
  errorInputContainer: {
    borderColor: palette.error.light
  },
  clearButton: {
    position: 'absolute',
    right: 4,
    bottom: 8
  },
  clearContainer: {
    width: 24,
    height: 24,
    backgroundColor: 'blue'
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