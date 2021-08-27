import React from 'react'
import PropTypes from 'prop-types'
import { SvgCss } from 'react-native-svg'

const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
  `

function AnuncioIcon({ size, ...others }) {
  return (
    <SvgCss xml={xml} width={size} height={size} {...others} />
  )
}

AnuncioIcon.propTypes = {
  size: PropTypes.number.isRequired,
}

export default AnuncioIcon
