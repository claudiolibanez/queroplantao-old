import React from 'react'
import PropTypes from 'prop-types'
import { RectButton } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  View,
  Image,
  // StyleSheet
} from 'react-native'

import Typography from '../../../components/Typography'
import { useLastMessage, MessageTypes } from '../../../models/Chat'

import groupImg from '../../../assets/img/group.jpg'
import doctorImg from '../../../assets/img/doctor.jpg'

import styles from './styles'

function ChatListItem({ user, data: chat, onPress: handleNavigationToChat }) {
  useLastMessage(chat)

  const {
    name,
    urlPicture,
    type,
    isGroup,
    lastMessage,
    timeLastMessage,
    unreadMessagesNumber,
    ownerId,
    jobAdvertisementTitle,
    jobAdvertiseOwnerAvatarUrl,
    ownerAvatarUrl
  } = chat 

  const {
    id: userId,
  } = user

  // const getOwner = async () => {
  //   const a = await chat.ownerRef.get()
    
  //   console.log(a.data())
  // }

  // getOwner()

  // console.log(user)
  // console.log(userId)
  // console.log(ownerId)

  const renderIconLastMessage = () => {
    let iconName

    switch (type) {
    case MessageTypes.ImageMessage:
      iconName = 'caramera'
      break
    case MessageTypes.FileMessage:
      iconName = 'file'
      break
    case MessageTypes.AudioMessage:
      iconName = 'microphone'
      break
    case MessageTypes.StickerMessage:
      iconName = 'sticker'
      break
    case MessageTypes.JobAdvertisementMessage:
      iconName = 'account-box'
      break
    default:
      iconName = ''
      break
    }

    if (iconName !== '') {
      return (
        <MaterialCommunityIcons name={iconName} size={16} color="#cacaca" />
      )
    }
    return null
  }

  return (
    <RectButton onPress={handleNavigationToChat}>
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          {isGroup ? (
            <Image
              style={styles.image}
              source={urlPicture ? { uri: urlPicture } : groupImg}
            />
          ) : userId === ownerId ? (
            <Image
              style={styles.image}
              source={jobAdvertiseOwnerAvatarUrl ? { uri: jobAdvertiseOwnerAvatarUrl } : doctorImg}
            />
          ) : (
            <Image
              style={styles.image}
              source={ownerAvatarUrl ? { uri: ownerAvatarUrl } : doctorImg}
            />  
          )}
        </View> 
        <View style={styles.textContent}>
          <View style={styles.titleContainer}>
            {isGroup ? (
              <Typography numberOfLines={1} variant="title" style={styles.chatName}>
                {name}
              </Typography>
            ) : (
              <Typography numberOfLines={1} variant="title" style={styles.chatName}>
                {jobAdvertisementTitle}
              </Typography>
            )}
            
            <Typography variant="caption" style={styles.timeLastMessage}>
              {timeLastMessage}
            </Typography>
            
          </View>
          <View style={styles.messageContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {type !== '' && (
                <View style={styles.iconLastMessage}>
                  {renderIconLastMessage()}
                </View>
              )}
              <Typography numberOfLines={1} variant="subTitle" style={styles.lastMessage}>
                {lastMessage || 'Nenhuma mensagem'}
              </Typography>
            </View>
            {unreadMessagesNumber && (
              <View style={styles.unreadMessages}>
                <Typography variant="caption" style={styles.unreadMessagesText}>
                  {unreadMessagesNumber}
                </Typography>
              </View>
            )}
          </View>
        </View>
      </View>
    </RectButton>
  )
}

ChatListItem.propTypes = {
  user: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
}

export default React.memo(ChatListItem)