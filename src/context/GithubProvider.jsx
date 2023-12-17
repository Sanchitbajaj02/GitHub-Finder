import { createContext, useState } from 'react'

const initialState = {
  username: '',
  error: false,
  loading: false,
}

export const GithubContext = createContext(initialState)

const username = window.sessionStorage.getItem('username')

export default function GithubProvider({ children }) {
  const [store, setStore] = useState({
    username: username || '',
    error: false,
    loading: false,
  })

  if (!children) {
    return <h1>loading...</h1>
  }

  return (
    <GithubContext.Provider
      value={{
        store,
        setStore,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
