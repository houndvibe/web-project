import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import SettingsProvider from "./providers/SettingsProvider";
import StoreProvider from "./providers/StoreProvider";

const App = () => {
  return (
    <SettingsProvider>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </SettingsProvider>
  );
};

export default App;
