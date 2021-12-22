import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com/",
});

// search users
export const searchUsers = async (username) => {
  const query = await instance.get(`search/users?q=${username}`);
  return query.data.items;
};

export const getUserData = async (username) => {
  const query = await instance.get(`users/${username}`);
  return query.data;
};
