import { useContext } from 'react'

import { userContext } from '../context'

const useCurrentUser = () => {
  const { user, firebaseUser, updatedUser } = useContext(userContext)
  return [user, firebaseUser]
}

export { useCurrentUser }