import React from "react";
import Router from "./routes";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <>
      <Router />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            backgroundColor: "#121212",
            color: "#e0e0e0",
          },
        }}
      />
    </>
  );
};

export default App;
