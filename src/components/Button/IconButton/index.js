import React from 'react'
import PropTypes from 'prop-types'

import {
  TouchableHighlight,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  root: {
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
  }
})

function IconButton({ children, style, ...others }) {
  return (
    <TouchableHighlight
      {...others}
      underlayColor="#DDDDDD"
      style={[styles.root, style]}
    >
      {children}
    </TouchableHighlight>
  )
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  ...TouchableHighlight.propTypes
}

IconButton.defaultProps = {
  style: {}
}

export default IconButton