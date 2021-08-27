import {
  StyleSheet,
} from 'react-native'

import { palette } from '../../components/Theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: palette.hoverOpacity
  },
  iconButton: {
    marginHorizontal: 8
  },
  titleContainer: {
    flexGrow: 1
  },
  divider: {
    marginTop: 8,
    width: '100%', 
    height: 1, 
    marginHorizontal: 16, 
    backgroundColor: '#e0e0e0'
  },
  content: {
    flex: 1,
  },
  bottomToolbar: {
    position: 'absolute',
    width: '100%',
    height: 80,
    bottom: 0,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})

export default styles