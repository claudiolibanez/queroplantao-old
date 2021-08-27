import React, {
  useMemo,
} from 'react'
import PropTypes from 'prop-types'

import {
  SectionList,
} from 'react-native'

import { groupSectionsByKey } from '../../../utils'

import ChatSectionHeader from './ChatSectionHeader'
import ChatListItem from '../ChatListItem'

// import styles from './styles'

function ChatSectionList({ data: chats, onPress: handleNavigationToChat }) {
  const sections = useMemo(() => groupSectionsByKey(chats), [chats])

  return (
    <SectionList 
      sections={sections}
      keyExtractor={item => item.id}
      renderSectionHeader={({ section }) => <ChatSectionHeader section={section} />}
      renderItem={({ item }) => ( 
        <ChatListItem
          item={item}
          onPress={() => handleNavigationToChat(item)}
        />
        
      )}
      style={{ marginBottom: 45 }}
    />
  )
}

ChatSectionList.propTypes = {
  data: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default ChatSectionList