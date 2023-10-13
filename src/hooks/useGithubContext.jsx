import { useContext } from 'react'
import { GithubContext } from '../context/GithubProvider'
GithubContext

export const useGithubContext = () => {
  return useContext(GithubContext)
}
