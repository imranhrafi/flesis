"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { navData } from "../../data/navData";
import NextLink from "../ui/NextLink";
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

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState<boolean>(false);

  const handleToggleMobileMenu = (): void => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav className='text-black bg-white navbar'>
        <div className='text-2xl cursor-pointer navbar-start text-primary-focus bold'>
          <NextLink href='/'>Flesis</NextLink>
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
                  offset={-70}
                  duration={500}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden navbar-end md:flex'>
          <button className='text-xs font-normal btn btn-outline btn-primary btn-sm'>
            <NextLink href='/auth'>Sign Up</NextLink>
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
