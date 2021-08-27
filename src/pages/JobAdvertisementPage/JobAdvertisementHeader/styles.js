import { StyleSheet } from 'react-native'

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
  titleSecondary: {
    fontSize: 20,
    fontFamily: 'OverpassSemiBold',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  searchButton: {
    marginRight: 8
  }
})

export default styles