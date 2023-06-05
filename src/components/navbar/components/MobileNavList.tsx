import React from "react";
import { NavbarProps } from "../Navbar";
import clsx from "clsx";

const MobileNavList = ({
  navData,
  mobileMenuOpen,
}: NavbarProps & { mobileMenuOpen: boolean }) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex flex-col items-center justify-center gap-2 text-lg sm:hidden",
        "mt-16 bg-white bg-opacity-60 backdrop-blur-lg backdrop-filter",
        "w-full sm:left-auto sm:w-full",
        "transform-gpu transition-transform duration-500 ease-in-out",
        mobileMenuOpen ? "translate-x-0 sm:hidden" : "-translate-x-full"
      )}
    >
      <ul className="flex h-screen flex-col items-center justify-center gap-2">
        {navData.map(({ id, name }) => (
          <li
            key={id}
            className="cursor-pointer text-black hover:text-primary "
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavList;
