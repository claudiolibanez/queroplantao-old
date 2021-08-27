import React, { useContext, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import SignInStack from './SignInStack'
import SignOutStack from './SignOutStack'

import { AppContext } from '../components/AppContext'

import { UserProvider } from '../models/User'
import { ChatProvider } from '../models/Chat'

import ChatPageProvider from '../pages/ChatPage/ChatPageProvider'

import collectionNames from '../constants/Firestore'

function Navigation() {
  const { values, setSignUpUser } = useContext(AppContext)
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState({})

  function onAuthStateChanged(_user) {
    setUser(_user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return () => subscriber()
  }, [])

  const setUserDatabase = ({ uid, name, email, isAdmin, avatarUrl }) => firestore()
    .collection(collectionNames.USERS)
    .doc(uid)
    .set({ name, email, isAdmin, avatarUrl })

  useEffect(() => {
    const saveUser = async () => {
      const { signUpUser } = values
      await user.updateProfile({ displayName: signUpUser.name })
      await setUserDatabase({
        ...signUpUser,
        uid: user.uid,
        isAdmin: false,
        avatarUrl: user.photoURL,
      })
      setSignUpUser(null)
    }

    if (!initializing && user && values.signUpUser) {
      saveUser()
    }
  }, [values, user, initializing])

  if (initializing) {
    return null
  }

  return user ? (
    <UserProvider firebaseUser={user}>
      <ChatProvider user={user}>
        <ChatPageProvider>
          <SignInStack />
        </ChatPageProvider>
      </ChatProvider>
    </UserProvider>
  ) : (<SignOutStack />)
}

export default Navigation