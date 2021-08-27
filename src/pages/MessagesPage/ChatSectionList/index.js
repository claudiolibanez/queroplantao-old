import React from 'react'
import PropTypes from 'prop-types'

import {
  SectionList,
} from 'react-native'

import { useCurrentUser } from '../../../models/User'

import ChatSectionHeader from './ChatSectionHeader'
import ChatListItem from '../ChatListItem'

function ChatSectionList({ data: sections, onPress: handlePressChatItem }) {
  const [user] = useCurrentUser()

  return (
    <SectionList 
      sections={sections}
      keyExtractor={item => item.id}
      renderSectionHeader={({ section }) => <ChatSectionHeader section={section} />}
      renderItem={({ item }) => ( 
        <ChatListItem
          user={user}
          data={item}
          onPress={() => handlePressChatItem(item)}
        />
      )}
      style={{ marginBottom: 40 }}
    />
  )
}

ChatSectionList.propTypes = {
  data: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default ChatSectionList