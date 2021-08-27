import React from 'react'
import PropTypes from 'prop-types'

import ChatIcon from '../../../components/SVGs/ChatIcon'
import UserIcon from '../../../components/SVGs/UserIcon'
import JobAdsIcon from '../../../components/SVGs/JobAdsIcon'
import GroupIcon from '../../../components/SVGs/GroupIcon'

function TabIcon({ color, size, route }) {
  switch (route.name) {
  case 'Mensagens':
    return (
      <ChatIcon size={size} color={color} />
    )
  case 'Conta':
    return (
      <UserIcon size={size} color={color} />
    )
  case 'Anúncios':
    return (
      <JobAdsIcon size={size} color={color} />
    )
  case 'Grupos':
    return (
      <GroupIcon size={size} color={color} />
    )
  default:
    return (
      <ChatIcon size={size} color={color} />
    )
  }
}

TabIcon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  route: PropTypes.object.isRequired
}

export default TabIcon