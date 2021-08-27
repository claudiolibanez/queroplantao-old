import React from 'react'
import PropTypes from 'prop-types'

import MessageBase from './MessageBase'
import TextMessage from './TextMessage'
import ImageMessage from './ImageMessage'
import AudioMessage from './AudioMessage'
import StickerMessage from './StickerMessage'
import JobAdvertisementMessage from './JobAdvertisementMessage'
import ChatMessageHeader from './ChatMessageHeader'
import { MessageTypes } from '../../../models/Chat/util'

function MessageComponentFC({ message }) {
  switch (message.type) {
  case MessageTypes.TextMessage:
    return (<TextMessage message={message} />)
  case MessageTypes.ImageMessage:
    return (<ImageMessage message={message} />)
  case MessageTypes.AudioMessage:
    return (<AudioMessage message={message} />)
  case MessageTypes.StickerMessage:
    return (<StickerMessage message={message} />)
  case MessageTypes.JobAdvertisementMessage:
    return (<JobAdvertisementMessage message={message} />)
  default:
    return (<TextMessage message={message} />)
  }
}

MessageComponentFC.propTypes = {
  message: PropTypes.object.isRequired
}

const MessageComponent = React.memo(MessageComponentFC)

export { MessageComponent, TextMessage, MessageBase, ChatMessageHeader }