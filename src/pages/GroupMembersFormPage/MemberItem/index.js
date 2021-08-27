import React from 'react'
import PropTypes from 'prop-types'
import IconFeather from 'react-native-vector-icons/Feather'

import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native'

import imgDoctor from '../../../assets/img/doctor.jpg'

import styles from './styles'

function MemberItem({ member, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.root}>
        <View style={styles.avatar}>
          <Image 
            source={member.avatarUrl 
              ? { uri: member.avatarUrl }
              : imgDoctor} 
            style={styles.image}
          />
          {member.selected && (
            <View style={styles.iconAvatar}>
              <IconFeather name="check" size={10} color="white" />
            </View>
          )}
        </View>
        <View style={{ marginLeft: 10, padding: 4, maxWidth: 250 }}>
          <Text style={styles.nameText}>
            {member.name}
          </Text>
          <Text 
            numberOfLines={1}
            style={styles.statusText}
            ellipsizeMode="tail"
          >
            {member.status ? member.status : 'Disponível' }
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

MemberItem.propTypes = {
  member: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default MemberItem