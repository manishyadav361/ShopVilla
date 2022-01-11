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

export const signIn = ({ email, password }) =>
  API.post("/auth/signin", { email, password });
export const signUp = ({ username, email, password, confirmPassword }) =>
  API.post("/auth/signup", { username, email, password, confirmPassword });

export const updateUser = (updatedData, id) =>
  API.patch(`/auth/${id}`, updatedData);
