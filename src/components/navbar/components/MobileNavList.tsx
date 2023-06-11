import clsx from "clsx";
import { Link } from "react-scroll";
import NextLink from "../../ui/NextLink";
import { NavbarProps } from "../Navbar";

const MobileNavList = ({
  navData,
  mobileMenuOpen,
  handleToggleMobileMenu,
}: NavbarProps & {
  mobileMenuOpen: boolean;
  handleToggleMobileMenu: () => void;
}) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex flex-col items-center justify-center gap-2 text-lg sm:hidden",
        "mt-16 bg-white bg-opacity-60 backdrop-blur-lg backdrop-filter",
        "w-full sm:left-auto sm:w-full",
        "transform-gpu transition-transform duration-500 ease-in-out",
        mobileMenuOpen
          ? "translate-x-0 sm:hidden"
          : "-translate-x-full"
      )}
    >
      <ul className='flex flex-col items-center justify-center h-screen gap-2'>
        {navData.map(({ id, name, path }) => (
          <li
            key={id}
            className='text-black cursor-pointer hover:text-primary '
          >
            <Link
              activeClass='active'
              to={path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleToggleMobileMenu}
            >
              {name}
            </Link>
          </li>
        ))}
        <li className=' md:hidden'>
          <button className='text-xs font-normal btn btn-outline btn-primary btn-sm'  onClick={handleToggleMobileMenu}>
            <NextLink href='/auth'>Sign Up</NextLink>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavList;
