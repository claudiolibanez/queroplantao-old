import React, {
  useEffect,
} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import {
  Alert,
  View,
} from 'react-native'

import { useCurrentUser } from '../../models/User'
import { useChats } from '../../models/Chat'
import { useChatPageState } from '../ChatPage/ChatPageProvider'

import { groupSectionsByKey } from '../../utils'
import { requestMultiple, PERMISSION_TYPE } from '../../utils/permissions'

import Screens from '../../constants/Screens'

import MessagesHeader from './MessagesHeader'
import ChatSectionList from './ChatSectionList'
import PressedButton from '../../components/Button/PressedButton'

import styles from './styles'

function MessagesPage() {
  const [user] = useCurrentUser()
  const navigation = useNavigation()
  const chats = useChats()

  const { id: userId } = user

  const { setChat } = useChatPageState()

  const handleNavigationToChat = (chatItem) => {
    const {
      id,
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
      ownerAvatarUrl,
      adminUsers,
      memberUsers,
      membersBlock
    } = chatItem 

    const chat = {
      id,
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
      ownerAvatarUrl,
      adminUsers,
      memberUsers,
      membersBlock,
    }

    const isMemberBlock = chat.membersBlock.includes(userId)
    
    if (isMemberBlock) {
      Alert.alert(
        'Chat bloqueado',
        'Usuário bloqueado nesse chat. Entre em contato com o adminstrador para solicitar desbloqueio',
      )
    } else {
      setChat(chat)
      navigation.navigate(Screens.Chat)
    }
  }

  const handleNavigationToAdvertisedJobsFormPage = () => {
    navigation.navigate(Screens.JobAdvertisementFormPage)
  } 

  const sections = groupSectionsByKey(chats)

  useEffect(() => {
    requestMultiple([PERMISSION_TYPE.microphone, PERMISSION_TYPE.photo])
  }, [])

  return (
    <>
      <MessagesHeader />
      <View style={styles.root}>
        {chats && (
          <ChatSectionList 
            data={sections} 
            onPress={handleNavigationToChat} 
          />
        )}
        <LinearGradient colors={['transparent', '#FFF']} style={styles.bottomToolbar}>
          <View style={styles.bottomToolbar}>
            <PressedButton 
              title="Criar Anúncio" 
              style={styles.fabButton}
              onPress={handleNavigationToAdvertisedJobsFormPage}
            />
          </View>
        </LinearGradient>
      </View>
    </>
  )
}

export default MessagesPage