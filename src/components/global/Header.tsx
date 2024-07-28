import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import IgniteTerminal from "./IgniteTerminal";

const Header: React.FC = () => {
  return (
    <header className="h-[70px] m-5 p-5 bg-overlay-background rounded-xl flex items-center justify-between">
      <Logo />
      <section className="flex items-center gap-3">
        <IgniteTerminal />
        <ThemeSwitcher />
      </section>
    </header>
  );
};

export default Header;
