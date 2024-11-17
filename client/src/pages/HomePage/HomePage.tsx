import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { signOut } from "../../entities/user/model/userSlice";
import { useTypedDispatch } from "../../app/globalStore/typed-hooks";
import { useNavigate } from "react-router-dom";

const passwordList = [
  { serviceName: "Google", password: "password123" },
  { serviceName: "Facebook", password: "qwerty456" },
  { serviceName: "Twitter", password: "abcde789" },
];

const HomePage = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOut());
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Button onClick={handleLogout}>LogOut</Button>
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
          Список Паролей
        </Typography>
        <List>
          {passwordList.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${item.serviceName} - ${item.password}`}
                sx={{ textAlign: "center" }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default HomePage;
