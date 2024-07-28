import React from "react";
import Authentication from "./layouts/auth.layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ChangePassword from "./pages/ChangePassword";
import Authenticate from "./pages/Authenticate";
import EmailVerification from "./pages/EmailVerification";
import TwoFactorAuthentication from "./pages/TwoFactorAuthentication";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />}>
          <Route path="" element={<Authenticate />} />
          <Route path="sessions/create" element={<SignUp />} />
          <Route path="sessions" element={<SignIn />} />
          <Route path="updates/password" element={<ChangePassword />} />
          <Route path="validates/email" element={<EmailVerification />} />
          <Route path="validates/tfa" element={<TwoFactorAuthentication />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
