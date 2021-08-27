import React from 'react'
import PropTypes from 'prop-types'
import { SvgCss } from 'react-native-svg'

const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
`

function ChatIcon({ size, ...others }) {
  return (
    <SvgCss xml={xml} width={size} height={size} {...others} />
  )
}

ChatIcon.propTypes = {
  size: PropTypes.number.isRequired,
}

export default ChatIcon
