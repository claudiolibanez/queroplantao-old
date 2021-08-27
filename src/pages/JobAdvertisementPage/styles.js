import { StyleSheet } from 'react-native'

import { palette, fontFamily } from '../../components/Theme'

export const styles = StyleSheet.create({ 
  separator: {
    height: 0.5,
    width: '96%',
    alignSelf: 'flex-end',
    backgroundColor: '#eaeaea'
  },
  root: {
    marginBottom: 16,
  },
  searchBar: {
    marginHorizontal: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: fontFamily.PromptSemiBold,
    color: palette.secondary.main,
    marginBottom: 4
  },
  inputContainer: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: '#f1f1f1',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  input: {
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 0,
    paddingBottom: 0,
    height: 40,
    fontSize: 16,
    color: 'black',
    fontFamily: fontFamily.OverpassRegular,
    flexGrow: 1
  },
  buttonFilter: {
    marginLeft: 8,
    height: 48,
    width: 48,
    borderRadius: 8,
    backgroundColor: palette.primary.dark,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center', 
    padding: 30,
  },
  emptyText: {
    fontSize: 14,
    fontFamily: fontFamily.LatoRegular,
    color: palette.secondary.main,
    marginBottom: 4
  }
})