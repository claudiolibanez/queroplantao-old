import { StyleSheet } from 'react-native'

import { palette, fontFamily } from '../../components/Theme'

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20, 
    marginVertical: 10
  },
  headerContainer: {
    flexDirection: 'row'
  },
  avatar: {
    width: 80, 
    height: 80, 
    borderRadius: 80 / 2
  },
  image: {
    width: '100%', 
    height: '100%', 
    borderRadius: 80 / 2 
  },
  iconAvatar: {
    width: 30, 
    height: 30, 
    borderRadius: 30 / 2, 
    backgroundColor: 'black', 
    position: 'absolute', 
    bottom: 0, 
    right: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  titleContainer: {
    marginLeft: 12,
    paddingTop: 8,
  },
  titlePrimary: {
    fontFamily: fontFamily.LatoBlack,
    fontSize: 24,
    color: palette.primary.main
  },
  formContainer: {
    marginHorizontal: 24,
    marginTop: 32,
    marginBottom: 40,
    paddingBottom: 100
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
})

export default styles