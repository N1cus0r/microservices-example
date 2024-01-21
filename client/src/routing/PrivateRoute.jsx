import {Navigate, Outlet} from "react-router-dom";
import LocalStorageService from "../services/localstorage-service.js";

const PrivateRoute = () => {
  const token = LocalStorageService.getLocalStorageToken();

  return token ? <Outlet /> : <Navigate to={"/login"} />;
};
export default PrivateRoute;
