import { StyleSheet } from 'react-native'

import { palette } from '../../../../components/Theme'

const styles = StyleSheet.create({
  content: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  messageContent: {
    maxWidth: '80%',
    backgroundColor: '#fff',
    elevation: 1,
    marginBottom: 1,
    borderRadius: 4,
  },
  isOwnerRoot: {
    alignSelf: 'flex-end',
  },
  isOwner: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6'
  },
  selected: {
    backgroundColor: palette.primary.hoverOpacity,
  },
  owner: {
    fontSize: 13,
    color: palette.primary.dark,
    fontFamily: 'OverpassBold'
  },
  userButton: {
    paddingHorizontal: 6,
    paddingTop: 4,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  messageButton: {
    paddingHorizontal: 6,
    paddingBottom: 4,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  messageButtonAlone: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 6,
  },
  message: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 6,
    paddingBottom: 4,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  footer: {
    marginLeft: 'auto',
    alignSelf: 'flex-end',
    paddingLeft: 8
  },
  date: {
    fontSize: 11,
    color: palette.textSecondary,
    marginRight: 4
  },
  fullWidth: {
    width: '80%'
  }
})

export default styles