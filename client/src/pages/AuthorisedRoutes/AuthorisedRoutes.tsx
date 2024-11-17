import { Navigate, Outlet } from "react-router-dom";
import { useTypedSelector } from "../../app/globalStore/typed-hooks";

const AuthorisedRoutes = () => {
  const isAuthorized = useTypedSelector((state) => state.user).authorized;

  return isAuthorized ? <Outlet /> : <Navigate to="/LogIn" />;
};

export default AuthorisedRoutes;
