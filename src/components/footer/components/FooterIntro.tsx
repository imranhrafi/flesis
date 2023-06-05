import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const FooterIntro = () => {
  return (
    <>
      <h1 className='text-xl text-primary'>Flesis</h1>
      <p className='text-sm leading-8 text-slate-500'>
        Manage your files efficiently and easily and it is a simple,
        fast and small file manager with a single file.
      </p>
      <div className='flex gap-2'>
        <FaFacebook className='p-4 text-white rounded bg-primary' />
        <FaInstagram className='p-4 rounded bg-primary' />

        <FaLinkedin className='p-4 rounded bg-primary' />

        <FaYoutube className='p-4 rounded bg-primary' />
      </div>
    </>
  );
};

export default FooterIntro;
