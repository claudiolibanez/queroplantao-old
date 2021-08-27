import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginHorizontal: 8,
    marginVertical: 10
  },
  itemDateContainer: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  itemDivider: {
    width: 1,
    height: '98%',
    alignSelf: 'center',
    backgroundColor: '#eaeaea'
  },
  itemDescription: {
    flex: 1,
    marginLeft: 4,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
})