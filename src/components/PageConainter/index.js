import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StatusBar
} from 'react-native'

function PageContainer({
  children,
  backgroundColor,
  statusBarStyle,
  statusBarBackgroundColor
}) {
  return (
    <>
      <StatusBar
        backgroundColor={statusBarBackgroundColor}
        barStyle={statusBarStyle}
      />
      <View
        style={{
          flex: 1,
          backgroundColor,
        }}
      >
        {children}
      </View>
    </>
  )
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  statusBarBackgroundColor: PropTypes.string,
  statusBarStyle: PropTypes.oneOf(['light-content', 'dark-content']),
}

PageContainer.defaultProps = {
  backgroundColor: '#ffffff',
  statusBarBackgroundColor: '#ffffff',
  statusBarStyle: 'dark-content'
}

export default PageContainer