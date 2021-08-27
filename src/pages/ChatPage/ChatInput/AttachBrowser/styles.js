import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    justifyContent: 'flex-end',
    margin: 0,
    marginBottom: 64,
    marginHorizontal: 12
  },
  browserBody: {
    paddingHorizontal: 36,
    paddingVertical: 16,
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 4,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  closeButton: {
    alignSelf: 'center',
    width: 40,
    height: 5,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  },
  spacing: {
    marginRight: 36
  }
})

export default styles