import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

import {
  View,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Vibration,
} from 'react-native'

import { useChatPageState } from '../../ChatPageProvider'
import { palette } from '../../../../components/Theme'

import styles from './styles'

function MessageBase({
  children,
  message,
  onUserPress,
  fullWidth,
  onLayout
}) {
  const {
    id,
    ownerName,
    createdAt,
    isOwnedByCurrentUser,
    isGroupMessage,
    selected,
    isBlocked,
    // type,
  } = message

  console.log(isBlocked)

  const { selectMessage, unselectMessage, selectedMessages } = useChatPageState()
  const handleMessageLongPress = () => {
    if (!selected) {
      Vibration.vibrate(10)
      selectMessage(id)
    }
  }
  const handleMessagePress = () => {
    if (selected) {
      unselectMessage(id)
    } else if (selectedMessages.length) {
      selectMessage(id)
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={isBlocked === false ? handleMessagePress : () => {}}
      onLongPress={isBlocked === false ? handleMessageLongPress : () => {}}
    >
      <View
        style={[
          styles.content,
          isOwnedByCurrentUser && styles.isOwnerRoot,
          selected && styles.selected,
        ]}
      >
        <View
          onLayout={onLayout}
          style={[
            styles.messageContent,
            isOwnedByCurrentUser && styles.isOwner,
            fullWidth && styles.fullWidth
          ]}
        >
          {!isOwnedByCurrentUser && isGroupMessage && !isBlocked && (
            <TouchableHighlight
              style={styles.userButton}
              underlayColor={palette.hoverOpacity}
              onPress={onUserPress}
            >
              <View>
                <Text style={styles.owner}>
                  {ownerName}
                </Text>
              </View>
            </TouchableHighlight>
          )}
          <View
            onPress={handleMessagePress}
            onLongPress={handleMessageLongPress}
          >
            <View 
              style={[
                styles.message,
                isOwnedByCurrentUser && styles.messageButtonAlone
              ]}
            >
              <View>
                {children}
              </View>
              <View style={styles.footer}>
                <Text style={styles.date}>
                  {format(createdAt, 'HH:mm')}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

MessageBase.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.object.isRequired,
  onUserPress: PropTypes.func,
  fullWidth: PropTypes.bool,
  onLayout: PropTypes.func
}

MessageBase.defaultProps = {
  onUserPress: () => { },
  onLayout: () => { },
  fullWidth: false
}

export default MessageBase