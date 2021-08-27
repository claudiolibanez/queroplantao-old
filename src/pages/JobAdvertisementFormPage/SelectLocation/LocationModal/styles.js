import { StyleSheet } from 'react-native'

import { fontFamily } from '../../../../components/Theme' 

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },  
  header: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 8
  },
  titleContainer: {
    flexGrow: 1
  },
  title: {
    marginBottom: 2
  },
  searchContainer: {
    flex: 1
  },
  textInputContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  textInput: {
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    height: 48,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 0,
    marginBottom: 0,
    fontSize: 16,
    color: '#000',
    fontFamily: fontFamily.OverpassRegular,
  },
  listItemDescription: {
    fontSize: 15,
    color: '#000',
    fontFamily: fontFamily.OverpassRegular,
  }
})

export default styles