const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.github.com/",
});

// search users
const searchUsers = async (username) => {
  const query = await instance.get(`search/users?q=${username}`);
  return query.data.items;
};

module.exports = searchUsers;
