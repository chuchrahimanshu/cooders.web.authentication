import React from "react";
import { Outlet } from "react-router-dom";

const Authentication: React.FC = () => {
  return (
    <section className="h-screen w-screen bg-base-background flex justify-center items-center">
      <Outlet />
    </section>
  );
};

export default Authentication;
