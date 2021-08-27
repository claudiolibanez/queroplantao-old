import React from 'react'
import PropTypes from 'prop-types'
import { RectButton } from 'react-native-gesture-handler'

import {
  View,
  Text,
  Image,
} from 'react-native'

import groupImg from '../../../assets/img/group.jpg'

import styles from './styles'

function ChatListItem({ item: chat, onPress: handleNavigationToChat }) {
  const {
    urlPicture,
    name,
    memberUsers
  } = chat

  return (
    <RectButton onPress={handleNavigationToChat}>
      <View style={styles.root}>
        <View style={styles.avatar}>
          <Image 
            source={urlPicture
              ? { uri: urlPicture }
              : groupImg} 
            style={styles.image}
          />
        </View>
        <View style={{ marginLeft: 10, padding: 4, maxWidth: 250 }}>
          <Text style={styles.nameText}>
            {name}
          </Text>
          <Text 
            numberOfLines={1}
            style={styles.membersText}
            ellipsizeMode="tail"
          >
            {`${memberUsers.length} membros`}
          </Text>
        </View>
      </View>
    </RectButton>
  )
}

ChatListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default ChatListItem