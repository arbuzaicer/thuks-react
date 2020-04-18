import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const baseConnection = axios.create({
  baseURL: BASE_URL,

});

const api = {
  getAlbums() {
    return baseConnection.get("/albums");
  },
  getPosts() {
    return baseConnection.get("/posts");
  },

  getPhotos() {
    return baseConnection.get("/photos");
  },
  postPosts(body, title) {
    return axios.post(
      "http://ec2-35-181-53-65.eu-west-3.compute.amazonaws.com:3000/charges?type=charge",
      {
        categoryId: 1,
        description: title,
        date: 1587157200000,
        money: Number(body),
        type: "charge",
      }
    );
  },
};

export default api;
