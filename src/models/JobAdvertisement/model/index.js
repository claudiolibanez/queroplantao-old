import firestore from '@react-native-firebase/firestore'

class JobAdvertisement {
  constructor(jobAdvertisement = null) {
    this.id = (jobAdvertisement && jobAdvertisement.id) || null
    this.title = (jobAdvertisement && jobAdvertisement.title) || null
    this.description = (jobAdvertisement && jobAdvertisement.description) || null
    this.location = (jobAdvertisement && jobAdvertisement.location) || null
    this.specialty = (jobAdvertisement && jobAdvertisement.specialty) || null
    this.paymentValue = (jobAdvertisement && jobAdvertisement.paymentValue) || null
    this.paymentObservation = (jobAdvertisement && jobAdvertisement.paymentObservation) || null
    this.startWhenDate = (jobAdvertisement && jobAdvertisement.startWhenDate) || null
    this.startWhenTime = (jobAdvertisement && jobAdvertisement.startWhenTime) || null
    this.endWhenDate = (jobAdvertisement && jobAdvertisement.endWhenDate) || null
    this.endWhenTime = (jobAdvertisement && jobAdvertisement.endWhenTime) || null
    this.createdAt = (jobAdvertisement && jobAdvertisement.whenTime) || null
    this.updatedAt = (jobAdvertisement && jobAdvertisement.whenTime) || null
    this.deleted = (jobAdvertisement && jobAdvertisement.deleted) || false
    this.ownerId = (jobAdvertisement && jobAdvertisement.whenTime) || null
    this.ownerEmail = (jobAdvertisement && jobAdvertisement.whenTime) || null
    this.ownerName = (jobAdvertisement && jobAdvertisement.whenTime) || null
    this.ownerAvatarUrl = (jobAdvertisement && jobAdvertisement.whenTime) || null
  }

  buildBaseJobAdvertisement(user) {
    const { id, email, name, avatarUrl } = user
    this.createdAt = firestore.FieldValue.serverTimestamp()
    this.updatedAt = firestore.FieldValue.serverTimestamp()
    this.ownerId = id
    this.ownerEmail = email
    this.ownerName = name
    this.ownerAvatarUrl = avatarUrl
  }

  buildJobAdvertisement(jobAdvertisement, user) {
    this.buildBaseJobAdvertisement(user)
    this.title = jobAdvertisement.title
    this.description = jobAdvertisement.description
    this.location = jobAdvertisement.location
    this.specialty = jobAdvertisement.specialty
    this.paymentValue = jobAdvertisement.paymentValue
    this.paymentObservation = jobAdvertisement.paymentObservation
    this.startWhenDate = jobAdvertisement.startWhenDate
    this.startWhenTime = jobAdvertisement.startWhenTime
    this.endWhenDate = jobAdvertisement.endWhenDate
    this.endWhenTime = jobAdvertisement.endWhenTime
  }
}

export default JobAdvertisement 