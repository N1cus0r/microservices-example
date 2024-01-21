import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import LocalstorageService from "../services/localstorage-service.js";
import NotificationService from "../services/notification-service.js";
import {publicApiClient} from "../services/clients/public-api-client.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const login = ({ email, password }) => {
    publicApiClient
      .post("/auth/login", { email, password })
      .then((res) => {
        LocalstorageService.setLocalStorageToken(res.data.token);
        navigate("/products");
      })
      .catch(() => {
        NotificationService.errorNotification("Login", "Invalid credentials");
      });
  };
  const logout = () => {
    LocalstorageService.delLocalStorageToken();
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
