import React from 'react'
import PropTypes from 'prop-types'
import IconFeather from 'react-native-vector-icons/Feather'
import IconsMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'

import imgDoctor from '../../../assets/img/doctor.jpg'

import styles from './styles'

function MemberSelectedItem({ member, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.root}>
        <View style={styles.avatar}>
          <Image 
            source={member.avatarUrl 
              ? { uri: member.avatarUrl }
              : imgDoctor} 
            style={styles.image}
            resizeMode="cover"
          />
          {member.admin ? (
            <View style={[styles.iconAvatar, { backgroundColor: '#DAA520' }]}>
              <IconsMaterialCommunityIcons name="crown" size={10} color="white" />
            </View>
          ) : (
            <View style={styles.iconAvatar}>
              <IconFeather name="x" size={10} color="white" />
            </View>
          )}
        </View>
        <View style={styles.displayNameContainer}>
          <Text 
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.displayNameText}
          >
            {member.name}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

MemberSelectedItem.propTypes = {
  member: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
}

export default MemberSelectedItem