import {
  StyleSheet,
} from 'react-native'

import { palette } from '../../components/Theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingBottom: 60,
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
})

export default styles