import React from 'react'
import PropTypes from 'prop-types'
import { SvgCss } from 'react-native-svg'

const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
`

function SearchIcon({ size, ...others }) {
  return (
    <SvgCss xml={xml} width={size} height={size} {...others} />
  )
}

SearchIcon.propTypes = {
  size: PropTypes.number.isRequired,
}

export default SearchIcon
