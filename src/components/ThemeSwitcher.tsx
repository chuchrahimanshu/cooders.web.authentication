import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";

const ThemeSwitcher: React.FC = () => {
  return (
    <FaWandMagicSparkles className="cursor-pointer text-base-text bg-overlay-background p-2 text-4xl rounded-full border-2 border-base-border hover:text-action-button" />
  );
};

export default ThemeSwitcher;
