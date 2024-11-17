import { useEffect, useState } from "react";
import Header from "../../widgets/Header/ui";
import store from "../globalStore/store";
import { Navigate } from "react-router-dom";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authorized, setAuthorized] = useState(
    store.getState().user.authorized
  );

  useEffect(() => {
    store.subscribe(() => setAuthorized(store.getState().user.authorized));
  }, []);

  return (
    <div className="App">
      {authorized ? <Header /> : <></>}
      {authorized ? <div>{children}</div> : <Navigate to={"/"} />}
    </div>
  );
};

export default AuthProvider;
