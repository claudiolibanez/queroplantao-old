import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import firestore from '@react-native-firebase/firestore'

import { orderByAsc } from '../../../utils'

import collectionNames from '../../../constants/Firestore'

import ChatContext from '../context'
import reducer from '../reducer'
import { setChats } from '../actions'

import { parseChatFromFirestore } from '../util'

function ChatProvider({ user, children }) {
  const [state, dispatch] = useReducer(reducer, { chats: [], chatIds: [] })

  const { uid: userId } = user

  const onQuerySnapshot = async (querySnapshot) => {
    let chats = querySnapshot.docs.map(doc => parseChatFromFirestore(doc)) 

    chats = orderByAsc(chats)

    dispatch(setChats(chats))
  }

  const onError = (error) => {
    console.log(error)
  }

  useEffect(() => {
    const subscriber = firestore()
      .collection(collectionNames.CHATS)
      .where('memberUsers', 'array-contains', userId)
      .where('deleted', '==', false)
      .onSnapshot(onQuerySnapshot, onError)

    return () => subscriber()
  }, [])
  
  return (
    <ChatContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

ChatProvider.propTypes = {
  user: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default ChatProvider 