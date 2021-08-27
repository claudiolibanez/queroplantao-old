import { actionNames } from '../actions'

function reducer(state, action) {
  switch (action.type) {
  case actionNames.ADD_CHAT: {
    const { chat } = action
    return { ...state,
      chats: { ...state.chats,
        [chat.id]: { ...chat, messages: [] }
      },
      chatIds: [...state.chatIds, chat.id]
    }
  }
  case actionNames.SET_CHATS: {
    const { chats } = action
    return { ...state, chats }
  }
  case actionNames.MODIFY_CHAT: {
    const { chat } = action
    return { ...state,
      chats: state.chats.map(c => {
        if (c.id === chat.id) {
          return chat
        }
        return c
      }) 
    }
  }
  case actionNames.REMOVE_CHAT: {
    const { chat } = action
    return { ...state,
      chats: state.chats.filter(c => c.id !== chat.id),
    }
  }
  default:
    return state
  }
}

export default reducer