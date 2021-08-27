import React, {
  useState,
  useCallback,
  useEffect,
} from 'react'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'

import {
  View,
} from 'react-native'

import { orderByAsc } from '../../utils'

import { useChatPageState } from '../ChatPage/ChatPageProvider'

import collectionNames from '../../constants/Firestore'
import Screens from '../../constants/Screens'

import GroupsHeader from './GroupsHeader'
import ChatSectionList from './ChatSectionList'

import styles from './styles'

function GroupsPage() {
  const navigation = useNavigation()

  const [isLoading, setIsLoading] = useState(false)
  const [mount, setMount] = useState(false)
  const [chats, setChats] = useState([])

  const chatsRef = firestore().collection(collectionNames.CHATS)

  const loadChats = useCallback(async () => {
    setIsLoading(false)
    try {
      // eslint-disable-next-line prefer-const
      let filters = []

      const snapshot = await chatsRef
        .where('isGroup', '==', true)
        .where('deleted', '==', false)
        .get()

      if (!snapshot.empty) {
        // eslint-disable-next-line no-loops/no-loops, no-plusplus
        for (let i = 0; i < snapshot.docs.length; i++) {
          const chat = {
            ...snapshot.docs[i].data(),
            id: snapshot.docs[i].id
          }

          filters.push(chat)
        }
      }

      // eslint-disable-next-line space-before-blocks
      // filters.sort((a, b) => {
      //   if (a.name < b.name) { return -1 }
      //   if (a.name > b.name) { return 1 }
      //   return 0
      // })

      filters = orderByAsc(filters)

      setChats(filters)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const { setChat } = useChatPageState()

  const handleNavigationToChat = (chatItem) => {
    setChat(chatItem)
    navigation.navigate(Screens.Chat)
  }

  useEffect(() => {
    if (!mount) {
      loadChats()
      setMount(!mount)
    }
    return () => {}
  }, [loadChats, mount])

  return (
    <View style={styles.root}>
      <GroupsHeader />
      <View style={styles.content}> 
        <ChatSectionList 
          data={chats}
          onPress={handleNavigationToChat} 
        />
      </View>

    </View>
  )
}

export default GroupsPage