import firestore from '@react-native-firebase/firestore'

class Group {
  constructor(group = null) {
    this.id = (group && group.id) || null
    this.name = (group && group.name) || null
    this.description = (group && group.description) || null
    this.category = (group && group.category) || null
    this.urlPicture = (group && group.urlPicture) || null
    this.isGroup = (group && group.isGroup) || true
    this.adminUsers = (group && group.adminUsers) || []
    this.memberUsers = (group && group.memberUsers) || []
    this.membersBlock = (group && group.membersBlock) || []
    this.isPrivate = (group && group.isPrivate) || true
    this.ownerId = (group && group.ownerId) || null
    this.ownerName = (group && group.ownerName) || null
    this.ownerEmail = (group && group.ownerEmail) || null
    this.ownerUrlAvatar = (group && group.ownerUrlAvatar) || null
    this.deleted = (group && group.deleted) || false
    this.createdAt = (group && group.createdAt) || null
    this.updatedAt = (group && group.updatedAt) || null
    this.deletedAt = (group && group.deletedAt) || null
  }

  buildBaseGroup(user) {
    const { id, email, name, avatarUrl } = user
    this.createdAt = firestore.FieldValue.serverTimestamp()
    this.updatedAt = firestore.FieldValue.serverTimestamp()
    this.ownerId = id
    this.ownerEmail = email
    this.ownerName = name
    this.ownerAvatarUrl = avatarUrl
  }

  buildGroup(group, user) {
    this.buildBaseGroup(user)
    this.name = group.name
    this.category = group.category
    this.urlPicture = group.urlPicture
    this.adminUsers = group.adminUsers
    this.memberUsers = group.memberUsers
  }
}

export default Group