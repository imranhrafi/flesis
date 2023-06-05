"use client";
import React, { useState } from "react";
import HumbergerIcon from "./components/humburgerIcon";
import MobileNavList from "./components/MobileNavList";

export type NavDataItem = {
  id: number | string;
  name: string;
  path: string;
};

export type NavbarProps = {
  navData: NavDataItem[];
};

const Navbar = ({ navData }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState<boolean>(false);

  const handleToggleMobileMenu = (): void => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav className='navbar bg-white text-black'>
        <div className='navbar-start text-primary-focus bold text-2xl cursor-pointer'>
          Flesis
        </div>
        <div className='navbar-center hidden md:flex'>
          <ul className='flex gap-3 text-xs'>
            {navData?.map(({ id, name }) => (
              <li
                className='cursor-pointer hover:text-primary'
                key={id}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className='navbar-end hidden md:flex'>
          <button className='btn btn-outline btn-primary btn-sm font-normal text-xs'>
            Sign Up
          </button>
        </div>
        <div className='navbar-end md:hidden'>
          <HumbergerIcon
            handleToggleMobileMenu={handleToggleMobileMenu}
            mobileMenuOpen={mobileMenuOpen}
          />
        </div>
      </nav>
      <MobileNavList
        navData={navData}
        mobileMenuOpen={mobileMenuOpen}
      />
    </header>
  );
};

export default Navbar;
