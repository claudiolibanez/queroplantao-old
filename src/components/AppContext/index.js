import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext(null)

function AppProvider({ children }) {
  const [values, setValue] = useState({})
  const setSignUpUser = (signUpUser) => setValue({ ...values, signUpUser }) 
  return (
    <AppContext.Provider
      value={{
        values,
        setSignUpUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { AppContext, AppProvider }
