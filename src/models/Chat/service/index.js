import firestore from '@react-native-firebase/firestore'
import { forEach } from 'lodash-es'

import collectionsNames from '../../../constants/Firestore'
import Chat from '../model'

class ChatService {
  static save(chat) {
    return firestore()
      .collection(`${collectionsNames.CHATS}`)
      .add(chat)
  }

  static create(jobAdvertisement, user) {
    const crateChat = new Chat() 
    crateChat.buildChat(jobAdvertisement, user)
    return ChatService.save(crateChat)
  }

  static async blockUser(chatId, selectedMessages) {
    const batch = firestore().batch()
    
    const doc = await firestore()
      .collection(`${collectionsNames.CHATS}`)
      .doc(chatId)
      .get()

    const chat = doc.data()
    const { membersBlock } = chat

    selectedMessages.forEach(async m => {
      // console.log(m.ownerId)

      await firestore()
        .collection(`${collectionsNames.CHATS}`)
        .doc(chatId)
        .update({
          membersBlock: [
            ...membersBlock,
            m.ownerId
          ],
        })

      const messages = await firestore()
        .collection(`${collectionsNames.CHATS}/${chatId}/${collectionsNames.MESSAGES}`)
        .where('ownerId', '==', m.ownerId)
        .get()

      messages.forEach(async n => {
        // console.log(n.id)
        await firestore()
          .collection(`${collectionsNames.CHATS}/${chatId}/${collectionsNames.MESSAGES}`)
          .doc(n.id)
          .update({
            ...n.data(),
            isBlocked: true
          })
      })
    })

    return batch.commit()
  }
}

export default ChatService