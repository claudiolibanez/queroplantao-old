import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'

import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native'

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalBody: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  leverContainer: {
    backgroundColor: '#fff',
    paddingTop: 8,
    paddingBottom: 4,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  lever: {
    alignSelf: 'center',
    width: 48,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'gray'
  }
})

function ScrollableModal({ 
  children, 
  open, 
  onClose,
  height,
  removeLever
}) {
  const scrollViewRef = useRef()
  const [scrollOffset, setScrollOffset] = useState()

  const handleOnScroll = event => {
    setScrollOffset(event.nativeEvent.contentOffset.y)
  }

  const handleScrollTo = p => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p)
    }
  }

  return (
    <Modal
      isVisible={open}
      onSwipeComplete={onClose}
      swipeDirection={['down']}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}
      scrollOffsetMax={(height + 100) - height}
      propagateSwipe
      style={styles.modal}
    >
      <View style={{ height }}>
        <ScrollView
          ref={scrollViewRef}
          onScroll={handleOnScroll}
          scrollEventThrottle={16}
          removeClippedSubviews={false}
        >
          <View style={[{ height }, styles.modalBody]}>
            {!removeLever && (
              <View style={styles.leverContainer}>
                <View style={styles.lever} />
              </View>
            )}
            {children}
          </View>
        </ScrollView>
      </View>
    </Modal>
  )
}

ScrollableModal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  height: PropTypes.number,
  removeLever: PropTypes.bool
}

ScrollableModal.defaultProps = {
  height: 300,
  removeLever: false
}

export default ScrollableModal