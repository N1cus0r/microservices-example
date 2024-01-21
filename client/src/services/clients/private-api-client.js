import axios from "axios";
import LocalStorageService from "../localstorage-service.js";

export const privateApiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/v1`,
});

privateApiClient.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${LocalStorageService.getLocalStorageToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
