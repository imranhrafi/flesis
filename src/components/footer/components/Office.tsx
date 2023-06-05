interface Address {
  location: string;
  address: string;
}
const Office = ({ addresses }: { addresses: Address[] }) => {
  return (
    <>
      <h1 className='mb-6 text-lg'>About</h1>
      <ul className='flex flex-col gap-6 text-sm text-slate-500'>
        {addresses.map((office, i) => (
          <li className='text-sm cursor-pointer' key={i}>
            <span>{office.location}</span>
            <span>{office.address}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Office;
