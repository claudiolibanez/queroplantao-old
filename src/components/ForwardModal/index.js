import React, { useMemo, useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import IconFeather from 'react-native-vector-icons/Feather'
import firestore from '@react-native-firebase/firestore'

import {
  View,
  SectionList,
  StyleSheet
} from 'react-native'

import { orderByAsc } from '../../utils'

import { useChatPageState } from '../../pages/ChatPage/ChatPageProvider'
import { useChats } from '../../models/Chat'
import ChatListHeader from './ChatListHeader'
import ChatListItem from './ChatListItem'
import SendBar from './SendBar'
import Typography from '../Typography'
import { IconButton } from '../Button'
import { palette } from '../Theme'
import { forwardMessages, forwardJobAdvertisement } from '../../models/Message/service'
import { useCurrentUser } from '../../models/User'

import ChatSectionHeader from '../../pages/GroupsPage/ChatSectionList/ChatSectionHeader'

import collectionNames from '../../constants/Firestore'

const styles = StyleSheet.create({
  root: {
    margin: 0,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: palette.hoverOpacity
  },
  iconButton: {
    marginHorizontal: 8
  },
  titleContainer: {
    flexGrow: 1
  },
})

function ForwardModal({ open, onClose, jobAdvertisement }) {
  // const chats = useChats()
  const [selectedChatIds, setSelectedChatIds] = useState([])
  const { selectedMessages, clearSelection } = useChatPageState()
  const [user] = useCurrentUser()

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

      filters = orderByAsc(filters)

      setChats(filters)
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    if (!open) setSelectedChatIds([])
  }, [open])

  const sections = useMemo(() => {
    const parsedSections = { 
      // recentChats: [], 
      chats: [] }
    chats.map(chat => ({
      ...chat,
      selected: Boolean(selectedChatIds.find(key => key === chat.id))
    })).forEach((chat, i) => {
      // if (i < 3) {
      //   parsedSections.recentChats.push(chat)
      // } else {
      parsedSections.chats.push(chat)
      // }
    }) 
    return Object.keys(parsedSections).map(key => ({
      title: key,
      data: parsedSections[key]
    }))
  }, [chats, selectedChatIds])

  const sendBarText = useMemo(() => {
    let text = ''
    chats.forEach(chat => {
      if (selectedChatIds.find(key => key === chat.id)) {
        text = text.concat(`${chat.name}, `)
      }
    })
    return text.substr(0, text.length - 2)
  }, [chats, selectedChatIds])

  const handlePressChat = (chat) => {
    const { id, selected } = chat
    if (selected) {
      setSelectedChatIds([...selectedChatIds.filter(key => key !== id)])
    } else {
      setSelectedChatIds([...selectedChatIds, id])
    }
  }

  const sendMessages = () => {
    forwardMessages(selectedChatIds, selectedMessages, user)
      .catch(err => {
        console.log(err)
        onClose()
      })
    clearSelection()
    onClose()
  }

  const sendJobAdventisement = () => {
    forwardJobAdvertisement(selectedChatIds, jobAdvertisement, user)
      .catch(err => {
        console.log(err)
        onClose()
      })
    clearSelection()
    onClose()
  }

  useEffect(() => {
    if (!mount) {
      loadChats()
      setMount(!mount)
    }
    return () => {}
  }, [loadChats, mount])

  return (
    <Modal
      style={styles.root}
      isVisible={open}
      oniconButtonPress={onClose}
      hasBackdrop={false}
      animationInTiming={100}
      animationOuTiming={100}
      useNativeDriver
    >
      <View style={styles.body}>
        <View style={styles.header}>
          <IconButton onPress={onClose} style={styles.iconButton}>
            <IconFeather name="arrow-left" size={24} />
          </IconButton>
          <View style={styles.titleContainer}>
            <Typography variant="headerTitle">
              Encaminhar...
            </Typography>
          </View>
          {/* <IconButton onPress={onClose} style={styles.iconButton}>
            <IconFeather name="search" size={24} />
          </IconButton> */}
        </View>
        <SectionList
          sections={sections}
          maxToRenderPerBatch={20}
          initialNumToRender={20}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ChatListItem chat={item} onPress={() => handlePressChat(item)} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <ChatListHeader title={title} />
          )}
        />
        {Boolean(sendBarText) && (
          <SendBar 
            onPress={
              jobAdvertisement 
                ? sendJobAdventisement 
                : sendMessages
            } 
            text={sendBarText}
          />
        )}
      </View>
    </Modal>
  )
}

ForwardModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  jobAdvertisement: PropTypes.object
}

ForwardModal.defaultProps = {
  jobAdvertisement: null
}

export default ForwardModal