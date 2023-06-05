interface Link {
  text: string;
  link: string;
}

const FooterLinks = ({ aboutData }: { aboutData: Link[] }) => {
  return (
    <>
      <h1 className='mb-6 text-lg'>About</h1>
      <ul className='flex flex-col gap-6 text-sm text-slate-500'>
        {aboutData.map((link) => (
          <li className='text-sm cursor-pointer' key={link.text}>
            {link.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterLinks;
