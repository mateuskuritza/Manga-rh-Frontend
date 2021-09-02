import axios from "axios";

const port = process.env.REACT_APP_API_BASE_URL || 4000;

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

export default instance;