interface Address {
  location: string;
  address: string;
}
const Office = ({ addresses }: { addresses: Address[] }) => {
  return (
    <>
      <h1 className='mb-6 text-lg'>Our Offices</h1>
      <ul className='flex flex-col gap-6 text-sm text-slate-500'>
        {addresses.map((office, i) => (
          <li className='text-sm cursor-pointer' key={i}>
            <p>{office.location}</p>
            <p>{office.address}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Office;
