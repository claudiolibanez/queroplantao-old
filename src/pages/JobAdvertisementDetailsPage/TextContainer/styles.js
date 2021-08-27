import { StyleSheet } from 'react-native'

import { palette, fontFamily } from '../../../components/Theme'

const styles = StyleSheet.create({
  root: {
    marginBottom: 16,
  },
  labelContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 4
  },
  label: {
    fontSize: 14,
    fontFamily: fontFamily.PromptSemiBold,
    color: palette.secondary.main,
    marginLeft: 4
  },
  textContainer: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 4
  },
})

export default styles