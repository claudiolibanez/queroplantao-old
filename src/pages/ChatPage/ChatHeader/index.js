import React, { useState, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import IconFeather from 'react-native-vector-icons/Feather'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'

import {
  View,
  Text,
  Image,
} from 'react-native'

import Screens from '../../../constants/Screens'

import { useCurrentUser } from '../../../models/User'

import doctorImg from '../../../assets/img/doctor.jpg'
import groupImg from '../../../assets/img/group.jpg'

import { ChatService } from '../../../models/Chat'

import { IconButton, TextButton } from '../../../components/Button'
import Typography from '../../../components/Typography'
import ForwardModal from '../../../components/ForwardModal'
import { useChatPageState } from '../ChatPageProvider'
import { MessageService } from '../../../models/Message'
import { palette } from '../../../components/Theme'

import styles from './styles'

function ChatHeader() {
  const [user] = useCurrentUser()
  const navigation = useNavigation()
  const { selectedMessages, clearSelection, chat, clear } = useChatPageState()
  const { 
    id: chatId, 
    urlPicture, 
    isGroup, 
    name, 
    memberUsers, 
    ownerId, 
    advertiserAvatarUrl, 
    ownerAvatarUrl,
    advertiserName,
    ownerName
  } = chat
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [blockModalVisible, setBlockModalVisible] = useState(false)
  const [forwardModalVisible, setForwardModalVisible] = useState(false)

  const handleBackButton = () => {
    if (selectedMessages.length) {
      clearSelection()
    } else {
      clear()
      navigation.reset({
        routes: [{ name: Screens.Home }],
      })
    }
  }

  const handleBlockUser = () => {
    setBlockModalVisible(true)
  }
  
  const handleDeleteSelectedMessages = () => {
    setDeleteModalVisible(true)
  }

  const handleNavigationToJobAdvertisementDetailsPage = () => {
    const {
      jobAdvertiseTitle,
      jobAdvertiseLocationCity,
      jobAdvertiseLocationDescription,
      jobAdvertiseLocationName,
      jobAdvertiseLocationState,
      jobAdvertiseLocationStateShort,
      jobAdvertiseSpecialty,
      jobAdvertisePaymentValue,
      jobAdvertisePaymentObservation,
      jobAdvertiseStartWhenDate,
      jobAdvertiseStartWhenTime,
      jobAdvertiseEndWhenDate,
      jobAdvertiseEndWhenTime,
      jobAdvertiseOwnerId,
    } = selectedMessages[0]

    const item = {
      title: jobAdvertiseTitle,
      description: jobAdvertiseLocationDescription,
      location: {
        city: jobAdvertiseLocationCity,
        name: jobAdvertiseLocationName,
        description: jobAdvertiseLocationDescription,
        state: jobAdvertiseLocationState,
        stateShort: jobAdvertiseLocationStateShort,
      },
      specialty: jobAdvertiseSpecialty,
      paymentValue: jobAdvertisePaymentValue,
      paymentObservation: jobAdvertisePaymentObservation,
      startWhenDate: jobAdvertiseStartWhenDate,
      startWhenTime: jobAdvertiseStartWhenTime,
      endWhenDate: jobAdvertiseEndWhenDate,
      endWhenTime: jobAdvertiseEndWhenTime,
      ownerId: jobAdvertiseOwnerId
    }

    navigation.navigate(Screens.JobAdvertisementDetailsPage, {
      item,
    })
  }

  const onDeleteSelectedMessages = () => {
    setDeleteModalVisible(false)
    MessageService.deleteBatch(chatId, selectedMessages)
      .catch(err => console.log(err))
  } 

  const onBlockUser = () => {
    setBlockModalVisible(false)

    ChatService.blockUser(chatId, selectedMessages)
      .catch(err => console.log(err))
  } 

  const canDelete = useMemo(() => Boolean(selectedMessages
    .filter(m => !m.canDelete).length === 0), [selectedMessages])

  const canBlock = useMemo(() => Boolean(selectedMessages
    .filter(m => !m.canBlock).length === 0 && selectedMessages
    .length === 1), [selectedMessages])

  const canOpenJobAdvertisement = useMemo(() => Boolean(selectedMessages
    .length === 1 && selectedMessages[0].type === 'jobadvertisement-message'), [selectedMessages])

  return (
    <View style={styles.root}>
      <View style={styles.left}>
        <IconButton onPress={handleBackButton}>
          <IconFeather name="arrow-left" size={26} color="#000" />
        </IconButton>
        {!selectedMessages.length ? (
          <>
            <View style={styles.avatarContainer}>
              {isGroup ? (
                <Image
                  style={styles.avatar}
                  source={urlPicture ? { uri: urlPicture } : groupImg}
                />
              ) : user.id === ownerId ? (
                <Image
                  style={styles.avatar}
                  source={advertiserAvatarUrl ? { uri: advertiserAvatarUrl } : doctorImg}
                />
              ) : (
                <Image
                  style={styles.avatar}
                  source={ownerAvatarUrl ? { uri: ownerAvatarUrl } : doctorImg}
                />  
              )}
              
            </View>
            <View style={styles.titleContainer}>
              {isGroup ? (
                <Text style={styles.titlePrimary}>
                  {name}
                </Text>
              ) : user.id === ownerId 
                ? (
                  <Text style={styles.titlePrimary}>
                    {advertiserName}
                  </Text>
                ) : (
                  <Text style={styles.titlePrimary}>
                    {ownerName}
                  </Text>
                )}

              <Text style={styles.subTitle}>
                {`${memberUsers && memberUsers.length} membros`}
              </Text>
            </View>
          </>
        ) : (
          <Text style={styles.selectedMessagesText}>
            {`${selectedMessages.length}`}
          </Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        {!selectedMessages.length ? (
          <></>
          // <IconButton onPress={() => { }}>
          //   <IconFeather name="more-vertical" size={24} color="#000" />
          // </IconButton>
        ) : (
          <>
            {canBlock && (
              <IconButton onPress={handleBlockUser} style={styles.actionButton}>
                <IconMaterialIcons name="block" size={24} color="#000" />
              </IconButton>
            )}
            {canDelete && (
              <IconButton onPress={handleDeleteSelectedMessages} style={styles.actionButton}>
                <IconFeather name="trash-2" size={24} color="#000" />
              </IconButton>
            )}
            {canOpenJobAdvertisement && (
              <IconButton 
                onPress={handleNavigationToJobAdvertisementDetailsPage} 
                style={styles.actionButton}
              >
                <IconFeather name="file-text" size={24} color="#000" />
              </IconButton>
            )}
            <IconButton onPress={() => setForwardModalVisible(true)} style={styles.actionButton}>
              <IconFeather name="corner-up-right" size={24} color="#000" />
            </IconButton>
          </>
        )}
      </View>
      <Modal
        isVisible={deleteModalVisible}
        onBackButtonPress={() => setDeleteModalVisible(false)}
        onBackdropPress={() => setDeleteModalVisible(false)}
        animationIn="fadeIn"
        animationOut="fadeOut"
        useNativeDriver
      >
        <View style={styles.deleteModal}>
          <View style={styles.deleteModalContent}>
            <Typography variant="title">
              {`Remover ${selectedMessages.length} ${selectedMessages.length > 1 ? 'menssagens' : 'menssagem'}?`}
            </Typography>
          </View>
          <View style={styles.deleteModalFooter}>
            <TextButton
              color={palette.primary.dark}
              title="CANCELAR"
              onPress={() => setDeleteModalVisible(false)}
            />
            <TextButton
              color={palette.primary.dark}
              title="REMOVER"
              onPress={onDeleteSelectedMessages}
            />
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={blockModalVisible}
        onBackButtonPress={() => setBlockModalVisible(false)}
        onBackdropPress={() => setBlockModalVisible(false)}
        animationIn="fadeIn"
        animationOut="fadeOut"
        useNativeDriver
      >
        <View style={styles.deleteModal}>
          <View style={styles.deleteModalContent}>
            <Typography variant="title">
              {/* {`Remover ${selectedMessages.length} 
              ${selectedMessages.length > 1 ? 'menssagens' : 'menssagem'}?`} */}
              {selectedMessages.length ? `Deseja bloquear o usuário ${selectedMessages[0].ownerName}?` : ''}
            </Typography>
          </View>
          <View style={styles.deleteModalFooter}>
            <TextButton
              color={palette.primary.dark}
              title="CANCELAR"
              onPress={() => setBlockModalVisible(false)}
            />
            <TextButton
              color={palette.primary.dark}
              title="BLOQUEAR"
              onPress={onBlockUser}
            />
          </View>
        </View>
      </Modal>
      <ForwardModal 
        open={forwardModalVisible}
        onClose={() => setForwardModalVisible(false)}
      />
    </View>
  )
}

export default ChatHeader