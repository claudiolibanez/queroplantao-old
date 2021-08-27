import firestore from '@react-native-firebase/firestore'

import collectionsNames from '../../../constants/Firestore'

class Chat {
  constructor(chat = null) {
    this.id = (chat && chat.id) || null
    this.name = (chat && chat.name) || null
    this.description = (chat && chat.description) || null
    this.category = (chat && chat.category) || null
    this.urlPicture = (chat && chat.urlPicture) || null
    this.isGroup = (chat && chat.isGroup) || false
    this.adminUsers = (chat && chat.adminUsers) || []
    this.memberUsers = (chat && chat.memberUsers) || []
    this.isPrivate = (chat && chat.isPrivate) || true

    // owner
    this.ownerRef = (chat && chat.ownerRef) || null
    this.ownerId = (chat && chat.ownerId) || null
    this.ownerName = (chat && chat.ownerName) || null
    this.ownerEmail = (chat && chat.ownerEmail) || null
    this.ownerAvatarUrl = (chat && chat.ownerUrlAvatar) || null

    // jobAdvertisement
    this.jobAdvertisementTitle = (chat && chat.jobAdvertisementTitle) || null
    this.jobAdvertiseOwnerId = (chat && chat.jobAdvertiseOwnerId) || null
    this.jobAdvertiseOwnerEmail = (chat && chat.jobAdvertiseOwnerEmail) || null
    this.jobAdvertiseOwnerName = (chat && chat.jobAdvertiseOwnerName) || null
    this.jobAdvertiseOwnerAvatarUrl = (chat 
      && chat.advertijobAdvertiseOwnerAvatarUrlserAvatarUrl) || null

    // timestamp
    this.deleted = (chat && chat.deleted) || false
    this.createdAt = (chat && chat.createdAt) || null
    this.updatedAt = (chat && chat.updatedAt) || null
    this.deletedAt = (chat && chat.deletedAt) || null
  }

  buildBaseChat(user) {
    const { id, email, name, avatarUrl } = user
    this.createdAt = firestore.FieldValue.serverTimestamp()
    this.updatedAt = firestore.FieldValue.serverTimestamp()
    this.ownerRef = firestore().collection(collectionsNames.USERS).doc(id)
    this.ownerId = id
    this.ownerEmail = email
    this.ownerName = name
    this.ownerAvatarUrl = avatarUrl
  }

  buildChat(jobAdvertisement, user) {
    this.buildBaseChat(user)
    this.category = 'Anúncio'
    this.jobAdvertisementTitle = jobAdvertisement.title
    this.jobAdvertiseOwnerId = jobAdvertisement.ownerId
    this.jobAdvertiseOwnerEmail = jobAdvertisement.ownerEmail
    this.jobAdvertiseOwnerName = jobAdvertisement.ownerName
    this.jobAdvertiseOwnerAvatarUrl = jobAdvertisement.ownerAvatarUrl
    this.adminUsers = []
    this.memberUsers = [
      jobAdvertisement.ownerId,
      user.id
    ]
  }
}

export default Chat