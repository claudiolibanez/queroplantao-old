import { StyleSheet } from 'react-native'

import { palette, fontFamily } from '../../../components/Theme'

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 4,
    paddingVertical: 6,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // backgroundColor: '#ced7e0',
    // backgroundColor: '#f1f1f1',
    backgroundColor: 'white',
    // backgroundColor: 'palette.primary.main',
    alignItems: 'flex-end',
  },
  rootContant: {
    flex: 1,
    flexDirection: 'row',
  },
  textInputBar: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    minHeight: 24,
    maxHeight: 142,
    borderRadius: 20,
    elevation: 2,
    marginHorizontal: 4,
  },
  textInputContainer: {
    flexGrow: 1,
  },
  textInput: {
    fontFamily: fontFamily.OverpassRegular,
    fontSize: 14,
    paddingHorizontal: 18,
    paddingVertical: 4,
    flexWrap: 'wrap',
  },
  textBarRightContainer: {
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtonContainer: {
    paddingHorizontal: 2,
    flexShrink: 1,
    justifyContent: 'flex-end'
  },
  mainButton: {
    backgroundColor: palette.primary.main,
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    elevation: 2
  },
  sendIcon: {
    paddingLeft: 4
  },
  recordTimeContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 8,
  },
  recordTime: {
    marginHorizontal: 12,
  },
  recordAudioIcon: {

  },
  containerStickers: {
    flex: 1,
    height: 200,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  itemStyle: {
    flex: 1, 
    height: 80, 
    margin: 4,
  },
  itemInvisible: {
    backgroundColor: 'transparent'
  },
  itemStickerStyle: {
    width: '100%',
    height: '100%'
  }
})

export default styles 