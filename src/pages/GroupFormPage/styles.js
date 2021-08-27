import {
  StyleSheet,
} from 'react-native'

import { palette } from '../../components/Theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
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
  formContainer: {
    paddingHorizontal: 16, 
    paddingTop: 4, 
    paddingBottom: 30, 
    backgroundColor: '#e8e8e8'
  },
  formContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 12
  }, 
  groupImageContainer: {
    width: 58, 
    height: 58, 
    borderRadius: 58 / 2
  },
  groupImage: {
    width: '100%', 
    height: '100%', 
    borderRadius: 58 / 2
  }
})

export default styles