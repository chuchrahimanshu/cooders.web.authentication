import React from "react";
import Router from "./routes";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
};

export default App;
