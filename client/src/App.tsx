import { Outlet } from "react-router-dom";
import "./App.css";
import { Button } from "@mui/material";
import { useLazyGetUsersQuery } from "./store/apiSlice";
import { useEffect, useState } from "react";

function App() {
  const [triger, { data }] = useLazyGetUsersQuery({});

  const [testData, setTestData] = useState();

  useEffect(() => {
    if (data) {
      setTestData(data.signal);
    }
  }, [data]);

  const handleTestQuery = () => {
    triger({});
  };

  return (
    <>
      <>{"This is CLIENT"}</>
      <Button onClick={handleTestQuery}>Click me</Button>
      <>{testData || "noTestData"}</>
      <Outlet />
    </>
  );
}

export default App;
