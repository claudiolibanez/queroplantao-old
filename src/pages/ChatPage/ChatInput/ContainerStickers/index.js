import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import firestore from '@react-native-firebase/firestore'

import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Image,
} from 'react-native'

import collectionNames from '../../../../constants/Firestore'

import { formatData } from './utils'

import styles from './styles'

function ContainerStickers({ onPress: handleSendSticker }) {
  // const [isLoading, setIsLoading] = useState(false)
  const [stickers, setStickers] = useState([])

  const sticekrsRef = firestore().collection(collectionNames.STICKERS)

  const numColumns = 4

  useEffect(() => {
    getStickers()
  }, [])

  const getStickers = async () => {
    // setIsLoading(true)

    const snapshot = await sticekrsRef
      .orderBy('createdAt', 'desc')
      .get()

    if (!snapshot.empty) {
      // eslint-disable-next-line no-loops/no-loops, no-plusplus
      for (let i = 0; i < snapshot.docs.length; i++) {
        const data = snapshot.docs[i].data()

        setStickers(data.urlFile)
      }
    }

    // setIsLoading(false)
  }

  return (  
    <View style={styles.root}>
      <View style={{ flex: 1, margin: 16 }}>
        {stickers && (
          <FlatList 
            data={formatData(stickers, numColumns)}
            keyExtractor={item => item.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              if (item.empty) {
                return <View style={[styles.itemStyle, styles.itemInvisible]} />
              }

              return (
                <TouchableWithoutFeedback onPress={() => handleSendSticker(item)}>
                  <View style={styles.itemStyle}> 
                    <Image 
                      source={{ uri: item }} 
                      resizeMode="contain" 
                      style={styles.itemStickerStyle} 
                    />
                  </View>
                </TouchableWithoutFeedback>
              )
            }}
            numColumns={numColumns}
          />
        )}
      </View>
    </View>
  )
}

ContainerStickers.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default ContainerStickers