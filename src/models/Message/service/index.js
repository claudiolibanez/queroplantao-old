import UUIDGenerator from 'react-native-uuid-generator'
import firestore from '@react-native-firebase/firestore'

import collectionsNames from '../../../constants/Firestore'
import Message from '../model'

class MessageService {
  static save(message) {
    return firestore()
      .collection(`${collectionsNames.CHATS}/${message.chatId}/${collectionsNames.MESSAGES}`)
      .add(message)
  }

  static saveBatch(chatId, messages) {
    const batch = firestore().batch()
    messages.forEach(message => {
      const messageId = firestore().doc().id
      const documentRef = firestore()
        .doc(`${collectionsNames.CHATS}/${chatId}/${collectionsNames.MESSAGES}/${messageId}`)
      batch.set(documentRef, { [messageId]: message })
    })
    return batch.commit()
  }

  static updateBatch(chatId, messages) {
    const batch = firestore().batch()
    messages.forEach(message => {
      const documentRef = firestore()
        .doc(`${collectionsNames.CHATS}/${chatId}/${collectionsNames.MESSAGES}/${message.id}`)
      batch.update(documentRef, message)
    })
    return batch.commit()
  }

  static deleteBatch(chatId, messages) {
    const batch = firestore().batch()
    messages.forEach(m => {
      const documentRef = firestore()
        .doc(`${collectionsNames.CHATS}/${chatId}/${collectionsNames.MESSAGES}/${m.id}`)
      batch.delete(documentRef)
    })
    return batch.commit()
  }
 
  static sendTextMessage(text, user, chatId) { 
    const message = new Message()
    message.buildTextMessage(text, user, chatId)
    return MessageService.save(message.toFirestore())
  }

  static sendImageMessage(url, user, chatId) {
    const message = new Message()
    message.buildImageMessage(url, user, chatId)
    return MessageService.save(message.toFirestore())
  }

  static sendFileMessage(url, user, chatId) {
    const message = new Message()
    message.buildFileMessage(url, user, chatId)
    return MessageService.save(message.toFirestore())
  }

  static sendAudioMessage(url, user, chatId) {
    const message = new Message()
    message.buildAudioMessage(url, user, chatId)
    return MessageService.save(message.toFirestore())
  }

  static sendStickerMessage(urlFile, user, chatId) {
    const message = new Message()
    message.buildStickerMessage(urlFile, user, chatId)
    return MessageService.save(message.toFirestore())
  }

  static sendWorkInterestMessage(text, jobAdvertisement, user, chatId) {
    const message = new Message()
    message.buildWorkInterestMessage(text, jobAdvertisement, user, chatId)
    return MessageService.save(message.toFirestore())
  }
}

export async function forwardMessages(chatIds, messages, user) {
  const batch = firestore().batch()
  // eslint-disable-next-line no-loops/no-loops, no-restricted-syntax
  for (const chatId of chatIds) {
    // eslint-disable-next-line no-loops/no-loops, no-restricted-syntax
    for (const message of messages) {
      const newMessage = new Message(message).setForwarded(chatId, user).toFirestore()

      // eslint-disable-next-line no-await-in-loop
      const uuid = await UUIDGenerator.getRandomUUID()
      const documentRef = firestore()
        .doc(`${collectionsNames.CHATS}/${chatId}/${collectionsNames.MESSAGES}/${uuid}`)
      batch.set(documentRef, newMessage)
    }
  }
  return batch.commit()
}

export async function forwardJobAdvertisement(chatIds, advertiseJob, user) {
  const batch = firestore().batch()
  // eslint-disable-next-line no-loops/no-loops, no-restricted-syntax
  for (const chatId of chatIds) {
    // eslint-disable-next-line no-await-in-loop
    const a = await firestore()
      .doc(`${collectionsNames.CHATS}/${chatId}`)
      .get()
      
    if (!a.data().memberUsers.includes(user.id)) {
      // eslint-disable-next-line no-await-in-loop
      await firestore()
        .doc(`${collectionsNames.CHATS}/${chatId}`)
        .update({
          memberUsers: [...a.data().memberUsers, user.id]
        })
    }

    const newMessage = new Message()
    newMessage.buildSharedJobAdvertise(advertiseJob)
    newMessage.setForwarded(chatId, user).toFirestore()

    // eslint-disable-next-line no-await-in-loop
    const uuid = await UUIDGenerator.getRandomUUID()
    const documentRef = firestore()
      .doc(`${collectionsNames.CHATS}/${chatId}/${collectionsNames.MESSAGES}/${uuid}`)
    batch.set(documentRef, newMessage)
  }

  return batch.commit()
}

export default MessageService 