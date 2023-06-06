"use client";
import { useState } from "react";
import { Link } from "react-scroll";

import MobileNavList from "./components/MobileNavList";
import HumbergerIcon from "./components/humburgerIcon";

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
      <nav className='text-black bg-white navbar'>
        <div className='text-2xl cursor-pointer navbar-start text-primary-focus bold'>
          Flesis
        </div>

        <div className='hidden navbar-center md:flex'>
          <ul className='flex gap-3 text-xs'>
            {navData?.map(({ id, name, path }) => (
              <li
                className='cursor-pointer hover:text-primary'
                key={id}
              >
                <Link
                  activeClass='active'
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust the offset value to match your specific layout
                  duration={500} // Adjust the duration as desired
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden navbar-end md:flex'>
          <button className='text-xs font-normal btn btn-outline btn-primary btn-sm'>
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
        handleToggleMobileMenu={handleToggleMobileMenu}
      />
    </header>
  );
};

export default Navbar;
