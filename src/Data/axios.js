import { create } from "axios";

const instance = create({
  baseURL: "https://api.github.com/",
});

// search users
const searchUsers = async (username) => {
  const query = await instance.get(`search/users?q=${username}`);
  return query.data.items;
};

export { searchUsers };
