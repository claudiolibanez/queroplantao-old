import { StyleSheet } from 'react-native'

import { palette, fontFamily } from '../../../components/Theme'

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
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 64, 
    height: 64, 
    borderRadius: 64 / 2
  },
  image: {
    width: '100%', 
    height: '100%', 
    borderRadius: 64 / 2
  },
  titleContainer: {
    marginLeft: 12
  },
  titlePrimary: {
    fontFamily: fontFamily.LatoBlack,
    fontSize: 24,
    color: palette.primary.main
  },
  subtitleSecundary: {
    marginTop: 4,
    fontFamily: fontFamily.LatoRegular,
    fontSize: 16,
    color: palette.textSecondary
  }
})

export default styles