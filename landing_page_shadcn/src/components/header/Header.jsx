import React from "react";
import Logo from "./Logo";
import Navmenu from "./Navmenu";
import ThemeToggle from "./themeToggle";
import { Button } from "../ui/button";

function Header() {
  return (
    <nav className="w-[80%] px-4 py-3 rounded-full max-w-screen border border-slate-700/70 mx-auto mt-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <Navmenu />
        <div className="flex gap-2 items-center">
          <ThemeToggle />
          <Button
            variant="outline"
            className="rounded-full text-sm border-gray-400"
          >
            Sign in
          </Button>
          <Button
           
            className="rounded-full text-sm font-medium hidden md:inline-flex border-gray-400"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
