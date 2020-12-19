import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID cpkUW6fIdQ3owCBimckWCNHW0gUxqGpj3Bcm3sQU7bY",
  },
});
