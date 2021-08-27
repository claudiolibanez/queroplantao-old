import React, { createContext, useState, useContext, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import firestore from '@react-native-firebase/firestore'
import { format } from 'date-fns'
import { toArray } from 'lodash'

import { useCurrentUser } from '../../../models/User'
import { parseMessagefromFirestore } from '../../../models/Chat/util'
import collectionNames from '../../../constants/Firestore'

export const ChatPageContext = createContext()

function ChatPageProvider({ children }) {
  const [user] = useCurrentUser()

  const [chat, setChat] = useState({})
  const [messages, setMessages] = useState([])
  const { id: userId } = user
  const { id: chatId, isGroup: isGroupChat, adminUsers } = chat

  const clear = () => {
    setChat({})
    setMessages([])
  }

  const selectMessage = (messageId) => {
    setMessages(messages.map(message => {
      if (message.id === messageId) {
        return { ...message, selected: true }
      }
      return message
    }))
  }

  const unselectMessage = (messageId) => {
    setMessages(messages.map(message => {
      if (message.id === messageId) {
        return { ...message, selected: false }
      }
      return message
    }))
  }
  
  const clearSelection = () => {
    setMessages(messages.map(message => ({ ...message, selected: false })))
  }

  const parseMessagesBySections = (dbMessages) => {
    const sections = {}
    toArray(dbMessages)
      .forEach(message => {
        const { createdAt } = message
        const sectionTitle = format(createdAt, 'dd/MM/yyyy')
        if (sections[sectionTitle]) {
          sections[sectionTitle] = [...sections[sectionTitle], message]
        } else {
          sections[sectionTitle] = [message]
        }
      })
    const parsed = Object.keys(sections)
      .map(key => ({
        title: key,
        data: sections[key]
      }))
    return parsed
  }

  const onError = (err) => console.log(err)

  useEffect(() => {
    if (!chatId) return () => {}
    const subscriber = firestore()
      .collection(`${collectionNames.CHATS}/${chatId}/${collectionNames.MESSAGES}`)
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        { includeMetadataChanges: true }, 
        (querySnapshot) => setMessages(querySnapshot
          .docs.map(doc => parseMessagefromFirestore(doc, userId, isGroupChat))),
        onError
      )
    return () => subscriber()
  }, [chatId, userId, isGroupChat])

  const sections = useMemo(() => parseMessagesBySections(messages), [messages])

  const selectedMessages = useMemo(() => messages.filter(message => message.selected)
    .map(message => ({
      ...message,
      canDelete: Boolean(message.ownerId === userId
        || (adminUsers && adminUsers.find(uid => uid === userId))),
      canBlock: Boolean(message.ownerId !== userId
        && (adminUsers && adminUsers.find(uid => uid === userId)))
    })), [messages, userId, adminUsers])
  
  return (
    <ChatPageContext.Provider
      value={{ 
        clear,
        chat,
        setChat,
        sections, 
        selectedMessages,
        clearSelection,
        selectMessage,
        unselectMessage
      }}
    >
      {children}
    </ChatPageContext.Provider>
  )
}

ChatPageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useChatPageState() {
  const {
    clear,
    chat,
    setChat,
    sections, 
    selectMessage,
    clearSelection,
    unselectMessage,
    selectedMessages
  } = useContext(ChatPageContext)
  return { 
    clear,
    chat,
    setChat,
    sections, 
    selectMessage, 
    clearSelection, 
    unselectMessage, 
    selectedMessages 
  }
}

export default ChatPageProvider 