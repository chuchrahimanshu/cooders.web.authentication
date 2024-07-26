import React from "react";
import Authentication from "./layouts/auth.layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accounts" element={<Authentication />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
