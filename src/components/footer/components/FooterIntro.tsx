import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const FooterIntro = () => {
  return (
    <>
      <div className='flex gap-2'>
        <Image src='/logo.png' alt='logo' width={24} height={24} />
        <h1 className='text-xl text-primary '>Flesis</h1>
      </div>
      <p className='my-8 text-sm leading-8 text-slate-500 md:my-0'>
        Manage your files efficiently and easily and it is a simple,
        fast and small file manager with a single file.
      </p>
      <div className='flex gap-2'>
        <FaFacebook className='p-4 text-5xl text-white transition-all duration-300 rounded-full cursor-pointer bg-primary hover:scale-105' />
        <FaInstagram className='p-4 text-5xl text-white transition-all duration-300 rounded-full cursor-pointer bg-primary hover:scale-105' />

        <FaLinkedin className='p-4 text-5xl text-white transition-all duration-300 rounded-full cursor-pointer bg-primary hover:scale-105' />

        <FaYoutube className='p-4 text-5xl text-white transition-all duration-300 rounded-full cursor-pointer bg-primary hover:scale-105' />
      </div>
    </>
  );
};

export default FooterIntro;
