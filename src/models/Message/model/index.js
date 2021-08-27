import { omit } from 'lodash'
import firestore from '@react-native-firebase/firestore'

class Message {
  constructor(message = null) {
    this.id = (message && message.id) || null
    this.chatId = (message && message.chatId) || null
    this.type = (message && message.type) || null
    this.text = (message && message.text) || null
    this.url = (message && message.url) || null
    this.urlFile = (message && message.urlFile) || null
    this.createdAt = (message && message.createdAt) || null

    this.isBlocked = (message && message.isBlocked) || false

    // owner
    this.ownerId = (message && message.ownerId) || null
    this.ownerEmail = (message && message.ownerEmail) || null
    this.ownerName = (message && message.ownerName) || null
    this.ownerAvatarUrl = (message && message.ownerAvatarUrl) || null

    this.persisted = (message && message.persisted) || null
    this.deleted = (message && message.deleted) || false
    this.forwarded = (message && message.forwarded) || false 
  
    // jobAdvertise
    this.jobAdvertiseTitle = (message && message.jobAdvertiseTitle) || null
    this.jobAdvertiseDescription = (message && message.jobAdvertiseDescription) || null
    this.jobAdvertiseLocationCity = (message && message.jobAdvertiseLocationCity) || null
    this.jobAdvertiseLocationDescription = (message 
      && message.jobAdvertiseLocationDescription) || null
    this.jobAdvertiseLocationName = (message && message.jobAdvertiseLocationName) || null
    this.jobAdvertiseLocationState = (message && message.jobAdvertiseLocationState) || null
    this.jobAdvertiseLocationStateShort = (message 
      && message.jobAdvertiseLocationStateShort) || null
    this.jobAdvertiseOwnerId = (message && message.jobAdvertiseOwnerId) || null
    this.jobAdvertiseOwnerName = (message && message.jobAdvertiseOwnerName) || null
    this.jobAdvertiseOwnerEmail = (message && message.jobAdvertiseOwnerEmail) || null
    this.jobAdvertiseOwnerAvatarUrl = (message && message.jobAdvertiseOwnerAvatarUrl) || null
    this.jobAdvertiseSpecialty = (message && message.jobAdvertiseSpecialty) || null
    this.jobAdvertisePaymentValue = (message && message.jobAdvertisePaymentValue) || null
    this.jobAdvertisePaymentObservation = (message 
      && message.jobAdvertisePaymentObservation) || null
    this.jobAdvertiseStartWhenDate = (message && message.jobAdvertiseStartWhenDate) || null
    this.jobAdvertiseStartWhenTime = (message && message.jobAdvertiseStartWhenTime) || null
    this.jobAdvertiseEndWhenDate = (message && message.jobAdvertiseEndWhenDate) || null
    this.jobAdvertiseEndWhenTime = (message && message.jobAdvertiseEndWhenTime) || null
  }

  buildBaseMessage(user) {
    const { id, email, name, avatarUrl } = user
    this.createdAt = firestore.FieldValue.serverTimestamp()
    this.ownerId = id
    this.ownerEmail = email
    this.ownerName = name
    this.ownerAvatarUrl = avatarUrl
  }

  buildTextMessage(text, user, chatId) {
    this.buildBaseMessage(user)
    this.text = text
    this.chatId = chatId
    this.type = MessageTypes.TextMessage
  }

  buildImageMessage(url, user, chatId) {
    this.buildBaseMessage(user)
    this.url = url
    this.chatId = chatId
    this.type = MessageTypes.ImageMessage
  }

  buildFileMessage(url, user, chatId) {
    this.buildBaseMessage(user)
    this.url = url
    this.chatId = chatId
    this.type = MessageTypes.FileMessage
  }

  buildAudioMessage(url, user, chatId) {
    this.buildBaseMessage(user)
    this.url = url
    this.chatId = chatId
    this.type = MessageTypes.AudioMessage
  }

  buildStickerMessage(urlFile, user, chatId) {
    this.buildBaseMessage(user)
    this.urlFile = urlFile
    this.chatId = chatId
    this.type = MessageTypes.StickerMessage
  }

  buildSharedJobAdvertise(jobAdvertisement) {
    this.jobAdvertiseTitle = jobAdvertisement.title
    this.jobAdvertiseDescription = jobAdvertisement.description
    this.jobAdvertiseLocationCity = jobAdvertisement.location.city
    this.jobAdvertiseLocationDescription = jobAdvertisement.location.description
    this.jobAdvertiseLocationName = jobAdvertisement.location.name
    this.jobAdvertiseLocationState = jobAdvertisement.location.state
    this.jobAdvertiseLocationStateShort = jobAdvertisement.location.stateShort
    this.jobAdvertiseOwnerId = jobAdvertisement.ownerId
    this.jobAdvertiseOwnerName = jobAdvertisement.ownerName
    this.jobAdvertiseOwnerEmail = jobAdvertisement.ownerEmail
    this.jobAdvertiseOwnerAvatarUrl = jobAdvertisement.ownerAvatarUrl
    this.jobAdvertiseSpecialty = jobAdvertisement.specialty
    this.jobAdvertisePaymentValue = jobAdvertisement.paymentValue
    this.jobAdvertisePaymentObservation = jobAdvertisement.paymentObservation
    this.jobAdvertiseStartWhenDate = jobAdvertisement.startWhenDate
    this.jobAdvertiseStartWhenTime = jobAdvertisement.startWhenTime
    this.jobAdvertiseEndWhenDate = jobAdvertisement.endWhenDate
    this.jobAdvertiseEndWhenTime = jobAdvertisement.endWhenTime
    this.type = MessageTypes.JobAdvertisementMessage
  }

  buildWorkInterestMessage(message, jobAdvertisement, user, chatId) {
    this.buildBaseMessage(user)
    this.text = message
    this.jobAdvertiseTitle = jobAdvertisement.title
    // this.jobAdvertiseDescription = jobAdvertisement.description
    // this.jobAdvertiseLocationCity = jobAdvertisement.location.city
    // this.jobAdvertiseLocationDescription = jobAdvertisement.location.description
    // this.jobAdvertiseLocationName = jobAdvertisement.location.name
    // this.jobAdvertiseLocationState = jobAdvertisement.location.state
    // this.jobAdvertiseLocationStateShort = jobAdvertisement.location.stateShort
    // this.jobAdvertiseOwnerId = jobAdvertisement.ownerId
    // this.jobAdvertiseOwnerName = jobAdvertisement.ownerName
    // this.jobAdvertiseOwnerEmail = jobAdvertisement.ownerEmail
    // this.jobAdvertiseOwnerAvatarUrl = jobAdvertisement.ownerAvatarUrl
    // this.jobAdvertiseSpecialty = jobAdvertisement.specialty.title
    // this.jobAdvertisePaymentValue = jobAdvertisement.paymentValue
    // this.jobAdvertisePaymentObservation = jobAdvertisement.paymentObservation
    this.chatId = chatId
    this.type = MessageTypes.TextMessage
  }

  setForwarded(chatId, user) {
    this.buildBaseMessage(user)
    this.chatId = chatId
    this.forwarded = true
    return this
  }

  fromFirestore(doc) {
    const rawMessage = doc.data()
    const {
      chatId,
      type,
      text,
      url,
      ownerId,
      ownerEmail,
      ownerName,
      ownerAvatarUrl,
      deleted,
      createdAt: createdAtTimestamp,
    } = rawMessage
    const createdAt = createdAtTimestamp
      ? createdAtTimestamp.toDate()
      : new Date()
    const { id, metadata } = doc
    const { hasPendingWrites } = metadata
    this.id = id
    this.chatId = chatId
    this.type = type
    this.text = text
    this.url = url
    this.ownerId = ownerId
    this.ownerEmail = ownerEmail
    this.ownerName = ownerName
    this.ownerAvatarUrl = ownerAvatarUrl
    this.createdAt = createdAt
    this.persisted = !hasPendingWrites
    this.deleted = deleted
    return this.toJSON()
  }

  toFirestore() {
    return omit(this, [
      'id',
      'persisted',
      'toJSON', 
      'fromFirestore',
      'buildBaseMessage',
      'buildTextMessage',
      'setForwarded'
    ])
  }

  toJSON() {
    return omit(this, [
      'toJSON', 
      'fromFirestore',
      'buildBaseMessage',
      'buildTextMessage',
      'setForwarded',
    ])
  }
}

export const MessageTypes = {
  TextMessage: 'text-message',
  ImageMessage: 'image-message',
  FileMessage: 'file-message',
  AudioMessage: 'audio-message',
  StickerMessage: 'sticker-message',
  JobAdvertisementMessage: 'jobadvertisement-message'
}

export default Message