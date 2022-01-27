import axios from "axios";

const api = {
  test: async () => {
    return await axios.get("/todos/1"); //https://jsonplaceholder.typicode.com/todos/1
  },
};

export default api;
