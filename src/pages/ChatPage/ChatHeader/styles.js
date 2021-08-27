import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    height: 56,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2
  },
  avatarContainer: {
    paddingRight: 12
  },
  avatar: {
    height: 34,
    width: 34,
    borderRadius: 16
  },
  left: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  titleContainer: {
    flexDirection: 'column'
  },
  titlePrimary: {
    fontSize: 17,
    fontFamily: 'OverpassBold',
  },
  subTitle: {
    fontFamily: 'OverpassRegular',
    color: 'grey'
  },
  selectedMessagesText: {
    marginBottom: 4,
    marginLeft: 8,
    fontSize: 22,
    alignSelf: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  actionButton: {
    marginRight: 8
  },
  deleteModal: {
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  deleteModalContent: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 8
  },
  deleteModalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8
  }
})

export default styles