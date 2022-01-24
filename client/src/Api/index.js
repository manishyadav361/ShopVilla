import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// USER ROUTES
export const signIn = ({ email, password }) =>
  API.post("/auth/signin", { email, password });
export const signUp = ({ username, email, password, confirmPassword }) =>
  API.post("/auth/signup", { username, email, password, confirmPassword });
export const updateUser = (updatedData, id) =>
  API.patch(`/auth/${id}`, updatedData);

//  PRODUCTS ROUTES
export const getProducts = () => API.get("/products");
export const getProduct = (id) => API.get(`/products/${id}`);
export const insertProduct = (data, id) =>
  API.post(`/products/${id}`, { data });

export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const updateProduct = (formData, id) =>
  API.patch(`/products/${id}`, formData);

// CART ROUTES
export const getCart = () => API.get("/cart");
export const getProductsBySearch = (searchString) =>
  API.get(`/products/search?searchString=${searchString}`);

export const createCart = (productId, price) =>
  API.post("/cart", { productId, price });
export const removeCart = (productId, price) =>
  API.patch("/cart", { productId, price });
export const removeCartItem = (productId) =>
  API.patch("/cart/remove", { productId });
