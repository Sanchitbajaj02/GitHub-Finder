import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 2000,
})

/**
 * @abstract search user data by username
 * @param {string} username
 * @returns {Promise}
 */
export const searchUsers = async (username) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .get(`search/users?q=${username}`)
      .then((query) => {
        resolve(query.data.items)
      })
      .catch((error) => {
        reject(error)
      })
  })

  return promise
}

/**
 * @abstract seach organization based on the organization name
 * @param {string} organization
 * @returns {Promise}
 */
export const searchOrganization = async (organization) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .get(`/orgs/${organization}`)
      .then((query) => {
        resolve(query.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
  return promise
}

/**
 * @abstract get single user data based on username
 * @param {string} username
 * @returns {Promise}
 */
export const getUserData = async (username) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .get(`users/${username}`)
      .then((query) => {
        resolve(query.data)
      })
      .catch((error) => {
        reject(error)
      })
  })

  return promise
}

/**
 * @abstract get the list of repositories of a single user
 * @param {string} username
 * @returns
 */
export const getUserRepos = async (username) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .get(`users/${username}/repos?per_page=9&sort=created:desc`)
      .then((query) => {
        resolve(query.data)
      })
      .catch((error) => {
        reject(error)
      })
  })

  return promise
}
