import { StyleSheet } from 'react-native'

import { palette } from '../../../components/Theme'

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  imageContainer: {
    paddingHorizontal: 16,
    alignSelf: 'center'
  },
  image: {
    height: 52,
    width: 52,
    borderRadius: 26
  },
  chatName: {
    marginBottom: 2,
    paddingTop: 12,
    paddingRight: 12,
    flexShrink: 1
  },
  timeLastMessage: {
    paddingTop: 18,
  },
  iconLastMessage: {
    marginRight: 4
  },
  lastMessage: {
    paddingRight: 12,
    flexShrink: 1
  },
  unreadMessages: {
    backgroundColor: palette.primary.dark,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  unreadMessagesText: {
    fontSize: 12,
    fontFamily: 'OverpassExtraBold',
    color: '#fff',
  },
  textContent: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 0.5,
    borderBottomColor: palette.border,
    paddingRight: 8
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 14,
  },
})

export default styles