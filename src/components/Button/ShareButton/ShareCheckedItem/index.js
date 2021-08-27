import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line  import/no-unresolved
import CheckBox from '@react-native-community/checkbox'

import {
  Text,
  TouchableOpacity,
} from 'react-native'

function ShareCheckedItem({ item, changeCheckedChats }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const handleToogleCheckBox = (value) => {
    setToggleCheckBox(!toggleCheckBox)
    
    const chat = value

    if (chat.checked) {
      chat.checked = false
    } else {
      chat.checked = true
    }

    changeCheckedChats(chat)
  }
  
  useEffect(() => {
    setToggleCheckBox(false)
  }, [])

  return (
    <TouchableOpacity 
      key={item.id} 
      style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }} 
      onPress={() => handleToogleCheckBox(item)}
    >
      <CheckBox 
        value={toggleCheckBox} 
        onValueChange={() => handleToogleCheckBox(item)} 
      />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )
}

ShareCheckedItem.propTypes = {
  item: PropTypes.object.isRequired,
  changeCheckedChats: PropTypes.func.isRequired,
}

export default ShareCheckedItem 