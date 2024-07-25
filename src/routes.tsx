import React from "react";
import Authentication from "./layouts/auth.layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accounts" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
