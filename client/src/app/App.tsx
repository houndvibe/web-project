import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./globalStore/store";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => {
  return (
    <StrictMode>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  );
};

export default App;
