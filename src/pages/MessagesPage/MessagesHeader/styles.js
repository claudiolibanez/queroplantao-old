import { StyleSheet } from 'react-native'
 
import { palette } from '../../../components/Theme'

const styles = StyleSheet.create({
  root: {
    paddingTop: 4,
    paddingLeft: 4,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: palette.hoverOpacity
  },
  titleContainer: {
    marginLeft: 4,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logo: {
    borderColor: '#000',
    borderWidth: 1,
    width: 200,
    height: 60,
    resizeMode: 'contain',
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
  },
  menuTrigger: {
    marginRight: 4
  },
  menu: {
    marginRight: 80,
    elevation: 8,
    borderRadius: 4,
  },
  menuOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: 'OverpassRegular',
    fontSize: 16,
  }
})

export default styles