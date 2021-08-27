import React, { useState, useEffect, useMemo, useRef } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust'
import getPath from '@flyerhq/react-native-android-uri-path'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import RNFS from 'react-native-fs'

import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player'

import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Platform,
  Animated, 
  Dimensions,
} from 'react-native'

import { useChatPageState } from '../ChatPageProvider'
import { IconButton } from '../../../components/Button'
import { MessageService } from '../../../models/Message'
import { useCurrentUser } from '../../../models/User'
import { palette } from '../../../components/Theme'

import AttachBrowser from './AttachBrowser'
import ContainerStickers from './ContainerStickers'

import styles from './styles'

const { width } = Dimensions.get('window')

function ChatInput() {
  const [user] = useCurrentUser()
  const { id: userId } = user
  const { chat: { id, memberUsers, membersBlock } } = useChatPageState()

  const [chatId, setChatId] = useState('')
  const [text, setText] = useState('')
  const [canSend, setCanSend] = useState(true)
  const [isAttachBrowserVisible, setAttachBrowserVisible] = useState(false)
  const [openContainerSticker, setOpenContainerSticker] = useState(false)

  const inputRef = useRef(null)

  const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current

  const [canRecordAudio, setCanRecordAudio] = useState(true)
  const [recordSecs, setRecordSecs] = useState(0)
  const [recordTime, setRecordTime] = useState('00:00:00')
  // const [recordAudio, setRecordAudio] = useState('')

  const [visible, setVisible] = useState(true)

  const textInputOpacity = useRef(new Animated.Value(1)).current
  const translateX = useRef(new Animated.Value(0)).current

  const recordTimeOpacity = useRef(new Animated.Value(0)).current

  const directoryPath = Platform.select({
    ios: '',
    android: `${RNFS.ExternalDirectoryPath}/audios`,
  })

  const fadeIn = () => {
    Animated.timing(textInputOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()

    Animated.timing(translateX, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start()

    Animated.timing(recordTimeOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setVisible(true))
  }

  const fadeOut = () => {
    Animated.timing(textInputOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()

    Animated.timing(translateX, {
      toValue: -width,
      duration: 500,
      useNativeDriver: true,
    }).start()

    Animated.timing(recordTimeOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setVisible(false))
  }

  const onStartRecord = async () => {
    fadeOut()

    setCanRecordAudio(false)

    if (!await RNFS.exists(directoryPath)) {
      await RNFS.mkdir(directoryPath) 
    }

    const path = `${directoryPath}/${Date.now()}_${id}.mp4`

    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    }

    await audioRecorderPlayer.startRecorder(path, audioSet)
    
    audioRecorderPlayer.addRecordBackListener((e) => {
      setRecordSecs(e.current_position)
      setRecordTime(audioRecorderPlayer.mmssss(
        Math.floor(e.current_position),
      ))
    })
  }

  const onStopRecord = async () => {
    setTimeout(() => {
      fadeIn()
      
      setRecordSecs(0)
      setRecordTime('00:00:00')
    }, 500)
      
    const result = await audioRecorderPlayer.stopRecorder()
    audioRecorderPlayer.removeRecordBackListener()
  
    const fileName = result.split(`file:///${directoryPath}/`)[1]
  
    const reference = storage().ref(`audios/${fileName}`)
    const filePath = getPath(result)
    await reference.putFile(filePath)
    await MessageService
      .sendAudioMessage(fileName, user, chatId)

    setCanRecordAudio(true)
  }

  const isMember = useMemo(() => memberUsers.includes(user.id), [user.id])

  useEffect(() => {
    setChatId(id)
    audioRecorderPlayer.setSubscriptionDuration(0.09)
    AndroidKeyboardAdjust.setAdjustResize()
  }, [])

  const handleSendText = () => {
    const isMemberBlock = membersBlock.includes(userId)
    
    if (isMemberBlock) {
      Alert.alert(
        'Chat bloqueado',
        'Usuário bloqueado nesse chat. Entre em contato com o adminstrador para solicitar desbloqueio',
      )
    } else if (text && canSend) {
      setCanSend(false)

      if (isMember) {
        MessageService
          .sendTextMessage(text, user, chatId)
          .then(() => setCanSend(true))
      } else {
        firestore().collection('chats').doc(chatId).update({
          memberUsers: [
            ...memberUsers,
            user.id
          ]
        })
          .then(() => {
            console.log('User updated!')
          })
          .then(() => {
            MessageService
              .sendTextMessage(text, user, chatId)
          })
          .then(() => setCanSend(true))
      }
      setText('')
    }
  }

  // const handleSendAudio = () => {
  //   MessageService
  //     .sendAudioMessage(fileName, user, chatId)
  // }

  const handleSendSticker = (urlFile) => {
    MessageService
      .sendStickerMessage(urlFile, user, chatId)
  }

  const handleOpenContainerSticker = () => {
    if (inputRef.current) {
      inputRef.current.blur()
      setOpenContainerSticker(!openContainerSticker)
    }
  }

  const handleChangeText = (value) => {
    setText(value)
  }

  const handleFocus = () => {
    setOpenContainerSticker(false)
  }

  const handleToggleModal = () => {
    setAttachBrowserVisible(!isAttachBrowserVisible)
  }

  return (
    <>
      <View style={styles.root}>
        {visible ? (
          // Show Input
          <Animated.View
            style={[
              styles.rootContant,
              {
                opacity: textInputOpacity,
                transform: [
                  { translateX },
                ],
              }
            ]}
          >
            <View style={styles.mainButtonContainer}>
              <TouchableHighlight
                underlayColor={palette.primary.dark}
                style={styles.mainButton}
                onPress={handleToggleModal}
              >
                <MaterialIcons 
                  name="attach-file" 
                  size={18} 
                  color="#fff"
                />
              </TouchableHighlight>
            </View>

            <View style={styles.textInputBar}>
              <View style={styles.textInputContainer}>
                <TextInput
                  ref={inputRef}
                  style={styles.textInput}
                  placeholder="Digite sua menssagem"
                  multiline
                  value={text}
                  onChangeText={handleChangeText}
                  onFocus={handleFocus}
                  autoCorrect
                />
              </View>
              <View style={styles.textBarRightContainer}>
                {!text && (
                  <IconButton onPress={handleOpenContainerSticker}>
                    <MaterialCommunityIcons 
                      name="sticker-emoji" 
                      size={22} 
                      color={palette.textSecondary}
                    />
                  </IconButton>
                )}
              </View>
            </View>
            
          </Animated.View>
        ) : (
          // Show Timer
          <Animated.View style={[styles.recordTimeContainer, { opacity: recordTimeOpacity, }]}>
            <Text style={styles.recordTime}>{recordTime}</Text>
          </Animated.View>
        )}

        {/* Send Text Message */}
        {text !== '' && (
          <View style={styles.mainButtonContainer}>
            <TouchableHighlight
              underlayColor={palette.primary.dark}
              style={styles.mainButton}
              onPress={handleSendText}
            >
              <Ionicons
                name="send"
                size={18}
                color="#fff"
                style={styles.sendIcon}
              />
            </TouchableHighlight>
          </View>
        )}
        
        {/* Send Audio Message */}
        {text === '' && (
          <View style={styles.mainButtonContainer}>
            <TouchableHighlight
              underlayColor={palette.primary.dark}
              style={styles.mainButton}
              onPressIn={onStartRecord}
              onPressOut={onStopRecord}
            >
              <MaterialCommunityIcons
                name="microphone"
                size={18}
                color="#fff"
                style={styles.recordAudioIcon}
              /> 
            </TouchableHighlight>
          </View>
        )}
      
        {/* Modal - Send File and Image Message */}
        <AttachBrowser 
          isVisible={isAttachBrowserVisible} 
          onClose={handleToggleModal} 
          chatId={chatId} 
          user={user}
        />
      
      </View>
        
      {/* Stickers Container */}
      {openContainerSticker && (
        <ContainerStickers onPress={handleSendSticker} />
      )}
    </>
  )
}

export default ChatInput 