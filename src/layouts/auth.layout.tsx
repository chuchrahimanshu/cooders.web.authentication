import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Authentication: React.FC = () => {
  return (
    <main className="h-screen overflow-x-hidden bg-base-background scrollbar-none">
      <Header />
      <section className="h-[90%] md:h-[80%] w-full bg-base-background flex justify-center items-center">
        <Outlet />
      </section>
    </main>
  );
};

export default Authentication;
