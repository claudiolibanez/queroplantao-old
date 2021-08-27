import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Image,
} from 'react-native'

import MessageBase from '../MessageBase'

import { styles } from './styles'

function StickerMessage({ message }) {
  const {
    urlFile,
    isOwnedByCurrentUser
  } = message

  const handleUserPress = () => { }
  
  return (
    <View style={isOwnedByCurrentUser && styles.isOwnerRoot}>
      <View style={styles.stickerContainer}>
        {urlFile && (
          <Image 
            style={styles.stickerPicture} 
            source={{ uri: urlFile }} 
            resizeMode="contain"
          />
        )}
      </View>
      <MessageBase
        message={message}
        onUserPress={handleUserPress}
      >
        <></>
      </MessageBase>
    </View>
  )
}

StickerMessage.propTypes = {
  message: PropTypes.object.isRequired,
}

export default StickerMessage
