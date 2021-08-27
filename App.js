import 'react-native-gesture-handler'

import React from 'react'
import { MenuProvider } from 'react-native-popup-menu'

import Navigation from './src/navigation'
import { AppProvider } from './src/components/AppContext'

function App() {
  return (
    <AppProvider>
      <MenuProvider>
        <Navigation />
      </MenuProvider>
    </AppProvider>
  )
}

export default App