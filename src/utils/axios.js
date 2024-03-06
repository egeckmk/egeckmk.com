import axios from "axios";

const isProd = false;

export const client = axios.create({
  baseURL: isProd
    ? "https://egeckmk-com-backend-uhyc.onrender.com"
    : "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer " + JSON.parse(localStorage.getItem("egeckmk-com-token")),
  },
});
