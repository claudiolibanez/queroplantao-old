import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import storage from '@react-native-firebase/storage'
 
import {
  View,
  Image,
  ActivityIndicator,
} from 'react-native'

import MessageBase from '../MessageBase'
import useComponentSize from '../../../../hooks/useComponentSize'

import styles from './styles'

function ImageMessage({ message }) {
  const [{ width }, onLayout] = useComponentSize()
  const { url: storagePath } = message
  const [url, setUrl] = useState('')

  useEffect(() => {
    storage()
      .ref(storagePath)
      .getDownloadURL()
      .then(resultUrl => setUrl(resultUrl))
  }, [storagePath])

  const handleUserPress = () => { }

  // console.log(`URL: ${url}`)

  return (
    <MessageBase 
      message={message}
      onUserPress={handleUserPress}
      onLayout={onLayout}
      fullWidth
    >
      <View style={styles.body}>
        {url !== '' 
          ? (
            <Image 
              style={[
                styles.image,
                { width: width - 12, height: width - 12 }
              ]}
              source={{
                uri: url
              }}
            />
          )
          : (
            <View style={styles.placeholderImage}>
              <ActivityIndicator size="large" color="white" />
            </View>
          )}
      </View>
    </MessageBase>
  )
}

ImageMessage.propTypes = {
  message: PropTypes.object.isRequired,
}

export default ImageMessage 