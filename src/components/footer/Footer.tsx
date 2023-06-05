import { about, addresses, links } from "../../data/footerData";
import AboutLink from "./components/AboutLink";
import FooterIntro from "./components/FooterIntro";
import FooterLinks from "./components/FooterLinks";
import Office from "./components/Office";

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col mt-20 md:flex-row md:justify-between md:gap-4'>
        {/* Top */}
        <div className='md:w-full'>
          <FooterIntro />
        </div>

        {/* Middle */}
        <div className='md:w-1/2'>
          <FooterLinks links={links} />
        </div>
        <div className='md:w-1/2'>
          <AboutLink aboutData={about} />
        </div>

        {/* Bottom */}
        <div className='md:w-full'>
          <Office addresses={addresses} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
