import React from 'react'

export const UserContext = React.createContext()

const UserStorage = ({ children }) => {
  const [loading, setLoading] = React.useState()

  return (
    <UserContext.Provider value={{ loading, setLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserStorage
