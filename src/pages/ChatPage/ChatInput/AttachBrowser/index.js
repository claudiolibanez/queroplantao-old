import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import IconFeather from 'react-native-vector-icons/Feather'
import DocumentPicker from 'react-native-document-picker'
import getPath from '@flyerhq/react-native-android-uri-path'
import storage from '@react-native-firebase/storage'
 
import {
  View,
} from 'react-native'

import IconButton from '../../../../components/Button/IconButton'
import Typography from '../../../../components/Typography'
import { MessageService } from '../../../../models/Message'

import styles from './styles'

function AttachBrowser({ isVisible, onClose, chatId, user }) {
  const handleClickGallery = async () => {
    onClose()
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      })
      const fileName = `${chatId}_${res.name}`
      const reference = storage().ref(fileName)
      const filePath = getPath(res.uri)
      await reference.putFile(filePath)
      MessageService.sendImageMessage(fileName, user, chatId)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err)
      } else {
        throw err
      }
    }
  }

  const handleClickFile = async () => {
    onClose()
    try {
      const res = await DocumentPicker.pick({
        type: [
          DocumentPicker.types.csv, 
          DocumentPicker.types.doc, 
          DocumentPicker.types.docx,
          DocumentPicker.types.pdf,
          DocumentPicker.types.ppt,
          DocumentPicker.types.pptx,
          DocumentPicker.types.xls,
          DocumentPicker.types.xlsx
        ],
      })
      const fileName = `${chatId}_${res.name}`
      const reference = storage().ref(fileName)
      const filePath = getPath(res.uri)
      await reference.putFile(filePath)
      MessageService.sendFileMessage(fileName, user, chatId)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err)
      } else {
        throw err
      }
    }
  }

  return (
    <Modal
      style={styles.root}
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backdropOpacity={0}
      swipeDirection={['up', 'down']}
      useNativeDriver
    >
      <View style={styles.browserBody}>
        <View style={styles.spacing}>
          <IconButton onPress={handleClickFile}>
            <IconFeather name="file" size={24} />
          </IconButton>
          <Typography variant="caption">
            Arquivo
          </Typography>
        </View>
        <View>
          <IconButton onPress={handleClickGallery}>
            <IconFeather name="image" size={24} />
          </IconButton>
          <Typography variant="caption">
            Galeria
          </Typography>
        </View>
      </View>
    </Modal>
  )
}

AttachBrowser.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  chatId: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}

export default AttachBrowser 