import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";

const useAuth = () => useContext(AuthContext);

export default useAuth;
