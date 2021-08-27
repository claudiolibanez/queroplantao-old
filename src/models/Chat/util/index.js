export function parseChatFromFirestore(data) {
  return {
    ...data.data(),
    id: data.id,
    typeMessage: '',
    lastMessage: '',
    timeLastMessage: '',
  }
} 

export function parseChatToFirestore() {

}

export function parseMessagefromFirestore(doc, userId, isGroupMessage) {
  const rawMessage = doc.data()
  const {
    createdAt: createdAtTimestamp,
    ownerId
  } = rawMessage
  const createdAt = createdAtTimestamp
    ? createdAtTimestamp.toDate()
    : new Date()
  const { id, metadata } = doc
  const { hasPendingWrites } = metadata
  return {
    ...rawMessage,
    id,
    createdAt,
    isGroupMessage,
    isOwnedByCurrentUser: userId === ownerId,
    selected: false,
    persisted: !hasPendingWrites
  }
}

export const MessageTypes = {
  TextMessage: 'text-message',
  ImageMessage: 'image-message',
  FileMessage: 'file-message',
  AudioMessage: 'audio-message',
  StickerMessage: 'sticker-message',
  JobAdvertisementMessage: 'jobadvertisement-message',
}