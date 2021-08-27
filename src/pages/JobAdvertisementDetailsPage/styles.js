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
    marginBottom: 160,
    // paddingBottom: 160
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  text: {
    flexShrink: 1,
    fontSize: 16,
    color: 'black',
    fontFamily: fontFamily.OverpassRegular,
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
  label: {
    fontSize: 14,
    fontFamily: fontFamily.PromptSemiBold,
    color: palette.secondary.main,
  }
})

export default styles