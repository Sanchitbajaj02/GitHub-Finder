import { createContext, useState } from 'react'

const initialState = {
  username: '',
  error: '',
  loading: '',
}

export const GithubContext = createContext(initialState)

const username = window.sessionStorage.getItem('username')

export default function GithubProvider({ children }) {
  const [store, setStore] = useState({
    username: username || '',
    error: '',
    loading: '',
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
