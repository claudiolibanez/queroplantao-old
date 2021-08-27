import { StyleSheet } from 'react-native'

import { fontFamily } from '../../components/Theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    backgroundColor: '#fff',
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
  },
  logoImage: {
    width: 160,
    height: 160
  },
  titleContainer: {
    marginBottom: 24
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fontFamily.PromptBold,
    textTransform: 'uppercase'
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  footerText: {
    fontFamily: 'OverpassRegular',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  textButton: {
    fontFamily: 'OverpassRegular',
    fontSize: 12,
    textDecorationLine: 'underline'
  }
})

export default styles