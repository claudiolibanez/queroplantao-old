import React, {
  useMemo,
} from 'react'
import PropTypes from 'prop-types'
import SectionList from 'react-native-tabs-section-list'

import {
  View,
  Text,
} from 'react-native'

import { groupSectionsByKey } from '../../../utils'

import ChatSectionTabHeader from './ChatSectionTabHeader'
import ChatListItem from '../ChatListItem'

import { styles } from './styles'

function ChatSectionTabList({ data: chats, onPress: handlePressChatItem }) {
  const sections = groupSectionsByKey(chats)

  // console.log(sections[0])

  return (
    <SectionList
      sections={sections}
      keyExtractor={item => item.id}
      stickySectionHeadersEnabled={false}
      scrollToLocationOffset={50}
      tabBarStyle={styles.tabBar}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderTab={({ title, isActive }) => (
        <View
          style={[
            styles.tabContainer,
            { borderBottomWidth: isActive ? 1 : 0 }
          ]}
        >
          <Text
            style={[
              styles.tabText,
              { color: isActive ? '#090909' : '#9e9e9e' }
            ]}
          >
            {title}
          </Text>
        </View>
      )}
      renderSectionHeader={({ section }) => <ChatSectionTabHeader section={section} />}
      renderItem={({ item }) => (

        <ChatListItem
          data={item}
          onPress={() => handlePressChatItem(item)}
        />
      )}
      style={{
        marginBottom: 50,
      }}
    />
  )
}

ChatSectionTabList.propTypes = {
  data: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default ChatSectionTabList