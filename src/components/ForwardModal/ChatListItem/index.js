import React from 'react'
import PropTypes from 'prop-types'
import IconFeather from 'react-native-vector-icons/Feather'

import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet
} from 'react-native'

import Typography from '../../Typography'
import { palette } from '../../Theme'

import groupImg from '../../../assets/img/group.jpg'

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  selected: {
    backgroundColor: palette.hoverOpacity
  },
  imageContainer: {
    paddingHorizontal: 16,
    alignSelf: 'center'
  },
  image: {
    height: 52,
    width: 52,
    borderRadius: 26,
    position: 'relative'
  },
  textContent: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 0.5,
    borderBottomColor: palette.hoverOpacity,
    paddingRight: 8
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatName: {
    marginBottom: 2,
    paddingTop: 12,
    paddingRight: 12,
    flexShrink: 1
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 14,
  },
  description: {
    paddingRight: 12,
    flexShrink: 1
  },
  checked: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
    backgroundColor: palette.primary.main,
    borderRadius: 10,
    right: 8,
    bottom: 4,
    elevation: 2
  },
})

function ChatListItem({ chat, onPress }) {
  const {
    urlPicture,
    name, 
    description,
    memberUsers,
    selected
  } = chat

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.root, selected && styles.selected]}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={urlPicture ? { uri: urlPicture } : groupImg}
          />
          {selected && (
            <View style={styles.checked}>
              <IconFeather name="check" size={14} color={palette.white} />
            </View>
          )}
        </View>
        <View style={styles.textContent}>
          <View style={styles.titleContainer}>
            <Typography numberOfLines={1} variant="title" style={styles.chatName}>
              {name}
            </Typography>
          </View>
          <View style={styles.descriptionContainer}>
            <Typography numberOfLines={1} variant="subTitle" style={styles.description}>
              {description || `${memberUsers.length} membros`}
            </Typography>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

ChatListItem.propTypes = {
  chat: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default React.memo(ChatListItem)