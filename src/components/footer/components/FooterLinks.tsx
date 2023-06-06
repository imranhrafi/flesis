interface Link {
  text: string;
  link: string;
}

const FooterLinks = ({ links }: { links: Link[] }) => {
  return (
    <div className=' mr-[72px] md:mr-0'>
      <h1 className='mb-6 text-lg'>Links</h1>
      <ul className='flex flex-col gap-6 text-sm text-slate-500'>
        {links.map((link) => (
          <li className='text-sm' key={link.text}>
            {link.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
