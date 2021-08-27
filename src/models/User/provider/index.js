import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import firestore from '@react-native-firebase/firestore'

import { userContext } from '../context'

import collectionNames from '../../../constants/Firestore'

function UserProvider({ children, firebaseUser }) {
  const [user, setUser] = useState({})

  const updatedUser = (_user) => {
    setUser(_user)
  }

  useEffect(() => {
    const unsubscribe = firestore()
      .doc(`${collectionNames.USERS}/${firebaseUser.uid}`)
      .onSnapshot(documentSnapshot => {
        setUser({ id: documentSnapshot.id, ...documentSnapshot.data() })
      })
    return () => unsubscribe()
  }, [])

  return (
    <userContext.Provider
      value={{ user, firebaseUser, updatedUser }}
    >
      {children}
    </userContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
  firebaseUser: PropTypes.object.isRequired
}

export default UserProvider 
