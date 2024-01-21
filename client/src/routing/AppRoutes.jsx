import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
import Layout from "../components/shared/Layout.jsx";
import OrdersPage from "../pages/OrdersPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/products"} element={<ProductsPage />} />
          <Route path={"/orders"} element={<OrdersPage />} />
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/login"} element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
