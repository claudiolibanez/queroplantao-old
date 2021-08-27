import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'

import {
  View,
} from 'react-native'

import styles from './styles'

function ForwardModal({ open, onClose, children }) {
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

ForwardModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default ForwardModal