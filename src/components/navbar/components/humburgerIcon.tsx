"use client";

import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

interface HumbergerIconProps {
  handleToggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}
const HumbergerIcon = ({
  handleToggleMobileMenu,
  mobileMenuOpen,
}: HumbergerIconProps) => {
  return (
    <div className=' flex justify-center align-center'>
      {mobileMenuOpen ? (
        <AiOutlineClose
          onClick={handleToggleMobileMenu}
          className='cursor-pointer text-primary text-2xl '
        />
      ) : (
        <BiMenuAltLeft
          onClick={handleToggleMobileMenu}
          className='cursor-pointer text-primary text-2xl '
        />
      )}
    </div>
  );
};

export default HumbergerIcon;
