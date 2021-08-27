const SET_CHATS = 'SET_CHATS'
const ADD_CHAT = 'ADD_CHAT'
const MODIFY_CHAT = 'MODIFY_CHAT'
const REMOVE_CHAT = 'REMOVE_CHAT'

export const setChats = (chats) => ({ type: SET_CHATS, chats })
export const addChat = (chat) => ({ type: ADD_CHAT, chat })
export const modifyChat = (chat) => ({ type: MODIFY_CHAT, chat })
export const removeChat = (chat) => ({ type: REMOVE_CHAT, chat })

export const actionNames = {
  SET_CHATS,
  ADD_CHAT,
  MODIFY_CHAT,
  REMOVE_CHAT,
}