import { StyleSheet } from 'react-native'

import { palette, fontFamily } from '../../components/Theme'

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 24,
  },
  title: {
    fontFamily: fontFamily.PromptBold
  },
  formContainer: {
    marginHorizontal: 24,
    marginBottom: 40,
    paddingBottom: 100
  },
  dateTimeContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  dateInput: {
    flex: 1,
    marginRight: 8
  },
  footer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff'
  },
  labelContainer: {
    marginBottom: 10
  }
})

export default styles