import {
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  root: {
    height: 96,
    paddingLeft: 20,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  titlePrimary: {
    fontSize: 24,
    fontFamily: 'LatoBlack',
  },
})

export default styles