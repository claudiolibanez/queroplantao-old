import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  },
  fabButton: {
    alignSelf: 'center'
  },
  separator: {
    height: 0.5,
    width: '96%',
    alignSelf: 'flex-end',
    backgroundColor: '#eaeaea'
  },
  bottomToolbar: {
    position: 'absolute',
    width: '100%',
    height: 80,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 42, 
    height: 42, 
    alignSelf: 'flex-end', 
    position: 'absolute', 
    right: 20,
  }
})

export default styles