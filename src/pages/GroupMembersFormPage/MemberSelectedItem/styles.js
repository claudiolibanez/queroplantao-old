import {
  StyleSheet,
} from 'react-native'

import { fontFamily, palette } from '../../../components/Theme'

const styles = StyleSheet.create({
  root: {
    alignItems: 'center', 
    marginHorizontal: 6, 
  },
  avatar: {
    width: 70, 
    height: 70, 
    borderRadius: 70 / 2,
  },
  image: {
    width: '100%', 
    height: '100%', 
    borderRadius: 70 / 2, 
  },
  iconAvatar: {
    position: 'absolute', 
    bottom: -2, 
    right: -2, 
    width: 24, 
    height: 24, 
    borderRadius: 24 / 2, 
    borderColor: 'white', 
    borderWidth: 1, 
    backgroundColor: 'black', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  displayNameContainer: {
    width: 60,
    marginTop: 4,
    alignItems: 'center'
  },
  displayNameText: {
    fontFamily: fontFamily.OverpassRegular,
    fontSize: 14,
    color: palette.textSecondary,
  }
})

export default styles