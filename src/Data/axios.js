import axios from "axios";

const instance = create({
  baseURL: "https://api.github.com/",
});

// search users
export const searchUsers = async (username) => {
  const query = await instance.get(`search/users?q=${username}`);
  return query.data.items;
};
