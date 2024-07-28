import React from "react";
import { useNavigate } from "react-router-dom";

const Logo: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate("/");
  };

  return (
    <p className="text-4xl cursor-pointer" onClick={handleHomeNavigation}>
      🧙‍♂️
    </p>
  );
};

export default Logo;
