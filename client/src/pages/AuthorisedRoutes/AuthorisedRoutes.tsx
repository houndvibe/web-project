import { Navigate, Outlet } from "react-router-dom";
import { useTypedSelector } from "../../app/globalStore/typed-hooks";

const AuthorisedRoutes = () => {
  const isAuthorized = useTypedSelector((state) => state.user).authorized;
  const localStorageAuth = localStorage.getItem("auth");

  return isAuthorized || localStorageAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/LogIn" />
  );
};

export default AuthorisedRoutes;
