import axios from "axios";

export const client = axios.create({
  baseURL: JSON.parse(import.meta.env.VITE_APP_IS_PROD)
    ? "https://egeckmk-com-backend-uhyc.onrender.com"
    : "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});
