import { BiGitMerge } from "react-icons/bi";
import { FaCogs } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";

export const benefits = [
  {
    id: 1,
    name: "Easy to Use",
    icon: <FaCogs className='p-4 text-5xl text-white' />,
    description:
      "Create, edit, copy, move, and download your files easily, everywhere, every time. Use it as your personal cloud.",
    link: "#",
    type: "secondary",
  },
  {
    id: 2,
    name: "Drag & Drop",
    icon: <BiGitMerge className='p-4 text-4xl text-white' />,
    description:
      "Ajax Upload, the ability to drag & drop, multiple files upload, and upload using URL with file extensions filter.",
    link: "#",
    type: "warning",
  },
  {
    id: 3,
    name: "Multiple Users",
    icon: <IoMdPeople className='p-4 text-5xl text-white' />,
    description:
      "Multiple users are supported, each with their own folder, permissions, and access roles.",
    link: "#",
    type: "error",
  },
];

export const getBackgroundColor = (type: string) => {
  switch (type) {
    case "secondary":
      return "bg-secondary";
    case "warning":
      return "bg-warning";
    case "error":
      return "bg-error";
    default:
      return "";
  }
};
const BenefitsSection = () => {
  return (
    <section className='mt-[150px] w-full p-4' id='benefitsSection'>
      <article className='mx-auto mt-10 prose text-center md:prose-lg lg:prose-xl'>
        <h2>Get Benefits & Advantages</h2>
        <p>
          While we can customize your plan to suit your needs, most
          clients schedule regular services.
        </p>
      </article>
      <div className='grid grid-cols-1 gap-3 mt-10 overflow-hidden md:grid-cols-2 lg:grid-cols-3'>
        {benefits.map((benefit) => (
          <article
            key={benefit.id}
            className='card card-compact flex h-[330px] border-[.5px] p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg '
          >
            <div
              className={`mb-[60px] flex h-16 w-16 items-center justify-center rounded-md ${getBackgroundColor(
                benefit.type
              )}`}
            >
              {benefit.icon}
            </div>
            <h3 className='mb-4 text-xl font-semibold'>
              {benefit.name}
            </h3>
            <p className='mb-auto text-sm font-normal leading-[180%] text-gray-600'>
              {benefit.description}
            </p>
            <a href='#' className='mt-auto underline link-primary'>
              Learn More
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
