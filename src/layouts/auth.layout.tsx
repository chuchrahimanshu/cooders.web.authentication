import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Authentication: React.FC = () => {
  return (
    <main className="h-screen overflow-x-hidden p-5 bg-base-background">
      <Header />
      <section className="h-full w-full bg-base-background flex justify-center items-center">
        <Outlet />
      </section>
    </main>
  );
};

export default Authentication;
