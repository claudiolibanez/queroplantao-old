import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  viewPlayer: {
    width: 200,
    // backgroundColor: 'blue'
  },
  viewBarWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    // backgroundColor: 'red'
  },
  viewBar: {
    backgroundColor: '#ccc',
    flex: 1,
    height: 2,
    justifyContent: 'center'
  },
  viewBarPlay: {
    backgroundColor: 'white',
    height: 4,
    borderRadius: 2,
    width: 0,
  },
  viewLoadingUrl: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignContent: 'center',
  }
  // viewPlayer: {
  //   alignSelf: 'stretch',
  //   alignItems: 'center',

  //   backgroundColor: 'red',
  // },
  // viewBarWrapper: {
  //   marginTop: 28 * ratio,
  //   marginHorizontal: 28 * ratio,
  //   alignSelf: 'stretch',
  //   // backgroundColor: 'red'
    
  // },
  // viewBar: {
  //   backgroundColor: '#ccc',
  //   height: 4 * ratio,
  //   alignSelf: 'stretch',
  // },
  // viewBarPlay: {
  //   marginTop: 60 * ratio,
  //   alignSelf: 'stretch',
  //   alignItems: 'center',
  //   backgroundColor: 'red'
  // },
  // txtCounter: {
  //   marginTop: 12 * ratio,
  //   color: 'white',
  //   fontSize: 20 * ratio,
  //   textAlignVertical: 'center',
  //   fontWeight: '200',
  //   fontFamily: 'Helvetica Neue',
  //   letterSpacing: 3,
  // },
})

export default styles