import React from 'react'
import PropTypes from 'prop-types'
import { SvgCss } from 'react-native-svg'

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"/></svg>
`

function ScheduleIcon({ size, ...others }) {
  return (
    <SvgCss xml={xml} width={size} height={size} {...others} />
  )
}

ScheduleIcon.propTypes = {
  size: PropTypes.number.isRequired,
}

export default ScheduleIcon
