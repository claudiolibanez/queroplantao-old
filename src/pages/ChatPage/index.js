// #region 
import React, { 
  useState,
} from 'react'

import {
  StatusBar,
  View,
  SectionList,
} from 'react-native'

import { useChatPageState } from './ChatPageProvider'
import { MessageComponent, ChatMessageHeader } from './ChatMessage'
import { MessageTypes } from '../../models/Chat'

import ChatHeader from './ChatHeader'
import ChatInput from './ChatInput'

// #endregion

import styles from './styles'

function ChatPage() {
  const { sections } = useChatPageState()

  const [showContainerSticker, setShowContainerSticker] = useState(false)

  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <View style={styles.root}>
        <ChatHeader />
      
        <SectionList
          inverted
          sections={sections}
          maxToRenderPerBatch={20}
          initialNumToRender={20}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            if (item.isBlocked) {
              const message = {
                ...item,
                isBlocked: true,
                type: MessageTypes.TextMessage,
                text: 'Mensagem Indisponível'
              }

              return (
                <MessageComponent message={message} />
              )
            } 
            return (
              <MessageComponent message={item} />
            )
          }}
          renderSectionFooter={({ section: { title } }) => (
            <ChatMessageHeader title={title} />
          )}
        />
        
        <ChatInput 
          callbackParent={setShowContainerSticker} 
          showContainerSticker={showContainerSticker}
        />
      </View>
    </>
  )
}

export default ChatPage