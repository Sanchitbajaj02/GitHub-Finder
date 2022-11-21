import axios from "axios";

// const clientID = process.env.REACT_APP_CLIENT_ID;
// const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const instance = axios.create({
  baseURL: "https://api.github.com/",
});

// search users
export const searchUsers = async (username) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .get(`search/users?q=${username}`)
      .then((query) => {
        resolve(query.data.items);
      })
      .catch((error) => {
        reject(error);
      });

    // return query.data.items;
  });

  return promise;
};

export const searchOrganization = async (organization) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .get(`/orgs/${organization}`)
      .then((query) => {
        resolve(query.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};

export const getUserData = async (username) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .get(`users/${username}`)
      .then((query) => {
        resolve(query.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
};

// get user repositories
export const getUserRepos = async (username) => {
  const promise = new Promise((resolve, reject) => {
    instance
      .get(`users/${username}/repos?per_page=9&sort=created:desc`)
      .then((query) => {
        resolve(query.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
};
