// import React, { useRef, useState } from 'react'
// import PropTypes from 'prop-types'
// import AntDesign from 'react-native-vector-icons/AntDesign'

// import {
//   StyleSheet,
//   View,
//   TouchableWithoutFeedback,
//   Animated,
// } from 'react-native'

// import { palette } from '../../Theme'

// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     position: 'absolute',
//   },
//   button: {
//     position: 'absolute',
//     width: 60,
//     height: 60,
//     borderRadius: 60 / 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowRadius: 10,
//     shadowColor: '#00213B',
//     shadowOpacity: 0.3,
//     shadowOffset: {
//       height: 10,
//     },
//   },
//   menu: {
//     backgroundColor: palette.primary.dark,
//   },
//   submenu: {
//     width: 48,
//     height: 48,
//     borderRadius: 48 / 2,
//     backgroundColor: palette.primary.dark,
//   }
// })

// function FabButton({ style, onPressCreateGroup, onPressJobAd, ...others }) {
//   const [open, setOpen] = useState(false)

//   const animation = useRef(new Animated.Value(0)).current

//   const toggleMenu = () => {
//     const toValue = open ? 0 : 1

//     Animated.spring(animation, {
//       toValue,
//       friction: 6,
//       useNativeDriver: true
//     }).start()

//     setOpen(!open)
//   }

//   const rotation = {
//     transform: [
//       {
//         rotate: animation.interpolate({
//           inputRange: [0, 1],
//           outputRange: ['0deg', '45deg']
//         })
//       }
//     ]
//   }

//   const jobAdStyles = {
//     transform: [
//       { scale: animation },
//       {
//         translateY: animation.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0, -60]
//         })
//       }
//     ]
//   }

//   const groupStyles = {
//     transform: [
//       { scale: animation },
//       {
//         translateY: animation.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0, -120]
//         })
//       }
//     ]
//   }

//   return (
//     <View style={[styles.root, style]}>

//       <TouchableWithoutFeedback {...others} onPress={onPressCreateGroup}>
//         <Animated.View style={[styles.button, styles.submenu, groupStyles]}>
//           <AntDesign name="addusergroup" size={20} color="#fff" />
//         </Animated.View>
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback {...others} onPress={onPressJobAd}>
//         <Animated.View style={[styles.button, styles.submenu, jobAdStyles]}>
//           <AntDesign name="plus" size={20} color="#fff" />
//         </Animated.View>
//       </TouchableWithoutFeedback>

//       <TouchableWithoutFeedback onPress={toggleMenu}>
//         <Animated.View style={[styles.button, styles.menu, rotation]}>
//           <AntDesign name="plus" size={24} color="#fff" />
//         </Animated.View>
//       </TouchableWithoutFeedback>

//     </View>
//   )
// }

// FabButton.propTypes = {
//   style: PropTypes.object,
//   ...TouchableWithoutFeedback.propTypes
// }

// FabButton.defaultProps = {
//   style: {}
// }

// export default FabButton

import React from 'react'
import PropTypes from 'prop-types'

import {
  TouchableHighlight,
  StyleSheet,
  Pressable,
  View,
  // TouchableWithoutFeedback,
  // Animated,
  Text
} from 'react-native'

import { fontFamily, palette } from '../../Theme'

const styles = StyleSheet.create({
  root: {
    backgroundColor: palette.primary.dark,
    paddingHorizontal: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    elevation: 4,
    zIndex: 99
  },
  title: {
    color: '#fff',
    fontFamily: fontFamily.PromptSemiBold,
    fontSize: 16
  }
})

function FabButton({ title, style, ...others }) {
  return (
    <Pressable
      {...others}
    >
      <View style={[styles.root, style]}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </Pressable>
  )
}

FabButton.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  ...TouchableHighlight.propTypes
}

FabButton.defaultProps = {
  children: undefined,
  style: {}
}

export default FabButton
