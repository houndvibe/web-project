import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { signIn } from "../../entities/user/model/userSlice";
import { useTypedDispatch } from "../../app/globalStore/typed-hooks";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const [signInMode, setSignInMode] = useState<boolean>(true);

  const handleChangeMode = () => {
    setSignInMode(!signInMode);
  };

  const handleOk = () => {
    dispatch(signIn());
    localStorage.setItem("auth", "true");
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h1" gutterBottom>
          {"-PASS BOY-"}
        </Typography>

        <Typography variant="h4" gutterBottom>
          {signInMode ? "Sign In:" : "Sign Up:"}
        </Typography>

        <TextField label="Name" variant="outlined" margin="normal" fullWidth />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Box display="flex" alignItems="center" mt={2} mb={2}>
          <Button
            variant="contained"
            color="primary"
            sx={{ minWidth: "40px", height: "40px", marginRight: "10px" }}
            onClick={handleOk}
          >
            OK
          </Button>
          <Typography variant="body1">Or:</Typography>
        </Box>

        <Button
          onClick={handleChangeMode}
          variant="contained"
          color="primary"
          fullWidth
        >
          {signInMode ? "Sign Up" : "Sign In"}
        </Button>
      </Box>
    </Container>
  );
};

export default LogInPage;
