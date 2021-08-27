import {
  StyleSheet,
} from 'react-native'

import { palette, fontFamily } from '../../../components/Theme'

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row', 
    paddingHorizontal: 14, 
    paddingVertical: 10 
  },
  avatar: {
    width: 52, 
    height: 52, 
    borderRadius: 52 / 2
  },
  image: {
    width: '100%', 
    height: '100%', 
    borderRadius: 52 / 2
  },
  iconAvatar: {
    position: 'absolute', 
    bottom: -2, 
    right: -2, 
    width: 20, 
    height: 20, 
    borderRadius: 20 / 2, 
    borderColor: 'white', 
    borderWidth: 1, 
    backgroundColor: 'green', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  nameText: {
    fontFamily: fontFamily.OverpassBold,
    fontSize: 16,
    color: palette.textPrimary,
  },
  membersText: {
    fontFamily: fontFamily.OverpassRegular,
    fontSize: 14,
    color: palette.textSecondary,
  }
})

export default styles