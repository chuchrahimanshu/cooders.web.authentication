import React from "react";
import Authentication from "./layouts/auth.layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ChangePassword from "./pages/ChangePassword";
import Authenticate from "./pages/Authenticate";
import EmailVerification from "./pages/EmailVerification";
import TwoFactorAuthentication from "./pages/TwoFactorAuthentication";
import ForgetPassword from "./pages/ForgetPassword";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />}>
          <Route path="" element={<Authenticate />} />
          <Route path="accounts/new" element={<SignUp />} />
          <Route path="accounts" element={<SignIn />} />
          <Route
            path="accounts/validates/password"
            element={<ForgetPassword />}
          />
          <Route
            path="accounts/updates/password"
            element={<ChangePassword />}
          />
          <Route
            path="accounts/validates/email"
            element={<EmailVerification />}
          />
          <Route
            path="accounts/validates/tfa"
            element={<TwoFactorAuthentication />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
