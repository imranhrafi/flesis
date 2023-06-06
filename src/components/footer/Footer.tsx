import { about, addresses, links } from "../../data/footerData";
import AboutLink from "./components/AboutLink";
import Copyright from "./components/Copyright";
import FooterIntro from "./components/FooterIntro";
import FooterLinks from "./components/FooterLinks";
import Office from "./components/Office";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='flex flex-col p-6 mt-20 md:flex-row md:justify-between md:gap-4'>
        {/* Top */}
        <div className='flex flex-col justify-between md:w-full'>
          <FooterIntro />
        </div>

        {/* Middle */}
        <div className='flex justify-start my-6 md:justify-around md:w-full md:my-0'>
          <div className=''>
            <FooterLinks links={links} />
          </div>
          <div className=''>
            <AboutLink aboutData={about} />
          </div>
        </div>

        {/* Bottom */}
        <div className='md:w-full'>
          <Office addresses={addresses} />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
