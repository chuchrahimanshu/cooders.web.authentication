import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";

const Authentication: React.FC = () => {
  return (
    <main className="h-screen overflow-x-hidden bg-base-background scrollbar-none relative">
      <Header />
      <section className="bg-base-background md:absolute flex justify-center items-center md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
        <Outlet />
      </section>
    </main>
  );
};

export default Authentication;
