import { useContext, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'
import { format } from 'date-fns'

import chatContext from '../context'
import { modifyChat } from '../actions'
import { useCurrentUser } from '../../User'

import { MessageTypes } from '../util'
import collectionNames from '../../../constants/Firestore'

export function useChats() {
  const { state: { chats } } = useContext(chatContext)
  return chats
}

export function useLastMessage(chat) {
  const [user] = useCurrentUser()
  const { dispatch } = useContext(chatContext)

  const onMessage = (querySnapshot) => {
    querySnapshot.docs.forEach(doc => {
      const { id: currentUserId } = user

      const { type, text, ownerId, ownerName, createdAt, isBlocked } = doc.data()

      const isOwnedByCurrentUser = ownerId === currentUserId

      const timeLastMessage = format((createdAt ? createdAt.toDate() : new Date()), 'HH:mm')
      
      if (isBlocked) {
        const lastMessage = 'Mensagem indisponível'
        dispatch(modifyChat({ 
          ...chat, 
          type: MessageTypes.TextMessag, 
          timeLastMessage, 
          lastMessage
        }))
      } else {
        switch (type) {
        case MessageTypes.TextMessage: {
          const lastMessage = `${isOwnedByCurrentUser ? '' : ownerName}${isOwnedByCurrentUser ? '' : ': '}${text}`
          dispatch(modifyChat({ 
            ...chat, 
            type, 
            timeLastMessage, 
            lastMessage
          }))
          break
        }
        case MessageTypes.ImageMessage: {
          const lastMessage = 'Foto'
          dispatch(modifyChat({ 
            ...chat, 
            type, 
            timeLastMessage, 
            lastMessage
          }))
          break
        }
        case MessageTypes.FileMessage: {
          const lastMessage = 'Arquivo'
          dispatch(modifyChat({ 
            ...chat, 
            type, 
            timeLastMessage, 
            lastMessage
          }))
          break
        }
        case MessageTypes.AudioMessage: {
          const lastMessage = 'Áudio'
          dispatch(modifyChat({ 
            ...chat, 
            type, 
            timeLastMessage, 
            lastMessage
          }))
          break
        }
        case MessageTypes.StickerMessage: {
          const lastMessage = 'Figurinha'
          dispatch(modifyChat({ 
            ...chat, 
            type, 
            timeLastMessage, 
            lastMessage
          }))
          break
        }
        case MessageTypes.JobAdvertisementMessage: {
          const lastMessage = 'Anúncio de Trabalho'
          dispatch(modifyChat({ 
            ...chat, 
            type, 
            timeLastMessage, 
            lastMessage
          }))
          break
        }
        default:
          break
        }
      }
    })
  }

  const onError = (err) => console.log(err)

  const { id: chatId } = chat
  
  useEffect(() => {
    if (!chatId || !user) return () => {}

    const unsubscribe = firestore()
      .collection(`${collectionNames.CHATS}/${chatId}/${collectionNames.MESSAGES}`)
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot(onMessage, onError)

    return () => unsubscribe()
  }, [chatId, user])
}
