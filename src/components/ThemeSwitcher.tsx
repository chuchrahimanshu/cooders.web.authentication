import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";

const ThemeSwitcher: React.FC = () => {
  return (
    <FaWandMagicSparkles className="cursor-pointer text-action-button bg-overlay-background p-2 text-4xl rounded-full border-2 border-action-button hover:border-highlight-border hover:text-highlight-border" />
  );
};

export default ThemeSwitcher;
