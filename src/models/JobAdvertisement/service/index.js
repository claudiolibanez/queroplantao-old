// import UUIDGenerator from 'react-native-uuid-generator'
import firestore from '@react-native-firebase/firestore'

import collectionsNames from '../../../constants/Firestore'
import JobAdvertisement from '../model'

class JobAdvertisementService {
  static async save(jobAdvertisement) {
    const doc = await firestore()
      .collection(`${collectionsNames.JOBADVERTISEMENTS}`)
      .add(jobAdvertisement)

    return firestore()
      .collection(`${collectionsNames.JOBADVERTISEMENTS}`)
      .doc(doc.id)
      .update({
        id: doc.id
      })
  }

  static createJobAdvertisement(jobAdvertisement, user) {
    const createJobAdvertisement = new JobAdvertisement()
    createJobAdvertisement.buildJobAdvertisement(jobAdvertisement, user)
    return JobAdvertisementService.save(createJobAdvertisement)
  }
}

export default JobAdvertisementService 