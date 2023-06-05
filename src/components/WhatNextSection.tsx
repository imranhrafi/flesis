import Image from "next/image";
import { FaCalculator, FaFilePdf } from "react-icons/fa";
import Button from "./ui/Button";

const WhatNextSection = () => {
  return (
    <section className="mt-12 flex flex-wrap items-center">
      <div className="w-full flex-auto md:w-1/2 lg:w-1/3 xl:w-1/2">
        <Image src="/image1.png" alt="hero" width={566} height={566} />
      </div>

      <div className="w-full flex-auto md:w-1/2 lg:w-2/3 xl:w-1/2">
        <div className="px-4 md:px-8">
          <h1 className="mb-4 text-3xl font-semibold">
            Create &amp; Edit Files
          </h1>
          <span className=" mt-2 text-sm font-medium text-error">
            WHAT'S NEXT?
          </span>
          <p className="mt-24 text-gray-600">
            If you’d like to make some changes to your landscape and are willing
            to do the planting yourself but just aren’t sure of what to plant
            where, our We Plan, You Plant service is for you! We Plan, You Plant
            is available by appointment on Saturdays at New Garden Gazebo. Now
            available online. For more details, please visit our website.
          </p>
          <div className="my-[50px] flex items-center space-x-4">
            <a href="/" className="flex items-center text-sm font-semibold">
              <FaFilePdf className="mr-2" />
              Download PDF
            </a>
            <a href="#" className="flex items-center text-sm font-semibold">
              <FaCalculator className="mr-2" />
              Calculate Files
            </a>
          </div>
          <Button color="primary">Learn More </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatNextSection;
