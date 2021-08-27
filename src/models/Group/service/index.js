import firestore from '@react-native-firebase/firestore'

import collectionsNames from '../../../constants/Firestore'
import Group from '../model'

class GroupService {
  static save(group) {
    return firestore()
      .collection(`${collectionsNames.CHATS}`)
      .add(group)
  }

  static create(group, user) {
    const crateGroup = new Group() 
    crateGroup.buildGroup(group, user)
    return GroupService.save(crateGroup)
  }
}

export default GroupService