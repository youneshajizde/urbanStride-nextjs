const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

const getDailyDeals = () => axiosClient.get("/products?populate=*");

const getAllProducts = () => axiosClient.get("/products?populate=*");

const getBrands = () => axiosClient.get("/categories?populate=*");

const registerUser = (username, email, password) =>
  axiosClient.post("/auth/local/register", {
    username: username,
    email: email,
    password: password,
  });

const signUpUser = (email, password) =>
  axiosClient.post("/auth/local", {
    identifier: email,
    password: password,
  });

export default {
  getDailyDeals,
  getAllProducts,
  getBrands,
  registerUser,
  signUpUser,
};
