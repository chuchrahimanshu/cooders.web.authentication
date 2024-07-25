import React from "react";
import { Outlet } from "react-router-dom";

const Authentication: React.FC = () => {
  return (
    <section className="h-screen w-screen bg-PRIMARY_BACKGROUND flex justify-center items-center">
      <Outlet />
    </section>
  );
};

export default Authentication;
