import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Authentication: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/sign-in");
    }
  }, [navigate]);

  return (
    <section className="h-screen w-screen bg-PRIMARY_BACKGROUND flex justify-center items-center">
      <Outlet />
    </section>
  );
};

export default Authentication;
