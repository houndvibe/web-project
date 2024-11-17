import { Button } from "@mui/material";
import { useTypedDispatch } from "../../app/globalStore/typed-hooks";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../entities/user/model/userSlice";

const LogOut = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOut());
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <Button onClick={handleLogout} sx={{ color: "white" }}>
      LogOut
    </Button>
  );
};

export default LogOut;
