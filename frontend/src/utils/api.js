import axios from "axios";
import config from "../config/config";

console.log(config)
const api = axios.create({
    baseURL: `http://${config.BACKEND_HOST}:${config.BACKEND_PORT}`,
});

export default api;