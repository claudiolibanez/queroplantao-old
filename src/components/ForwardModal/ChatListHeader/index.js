import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet
} from 'react-native'

import Typography from '../../Typography'

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 12,
    paddingBottom: 14,
    paddingTop: 18
  }
})

function ChatListHeader({ title }) {
  return (
    <View style={styles.root}>
      <Typography variant="listHeader">
        {title === 'recentChats' ? 'Conversas frequentes' : 'Conversas recentes'}
      </Typography>
    </View>
  )
}

ChatListHeader.propTypes = {
  title: PropTypes.string.isRequired
}

export default React.memo(ChatListHeader)