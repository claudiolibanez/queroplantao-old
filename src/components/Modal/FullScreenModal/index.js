import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'

import {
  StyleSheet,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  root: {
    margin: 0
  },
  body: {
    flex: 1,
    backgroundColor: '#fff'
  },
})

function FullScreenModal({ children, open, onClose }) {
  return (
    <Modal
      style={styles.root}
      isVisible={open}
      oniconButtonPress={onClose}
      hasBackdrop={false}
      animationInTiming={100}
      animationOuTiming={100}
      useNativeDriver
    >
      <View style={styles.body}>
        {children}
      </View>
    </Modal>
  )
}

FullScreenModal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default FullScreenModal