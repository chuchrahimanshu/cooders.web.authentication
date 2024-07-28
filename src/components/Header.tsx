import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="h-[70px] p-5 bg-overlay-background rounded-xl flex items-center justify-between">
      <Logo />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
