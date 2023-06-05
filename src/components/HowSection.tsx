import Image from "next/image";
import { benefits, getBackgroundColor } from "./BenefitsSection";

type Benefit = {
  id: number;
  name: string;
  icon: JSX.Element;
  description: string;
  link: string;
  type: string;
};

const HowSection = () => {
  return (
    <section className="mt-[150px] flex flex-wrap items-center justify-between">
      <div className=" w-full flex-auto md:w-1/2 lg:w-1/3 xl:w-1/2">
        <div className="px-4 md:px-8">
          <span className="mb-4 text-sm font-medium text-red-500">
            HOW IT WORKS
          </span>
          <h1 className="mb-4 text-3xl font-semibold">
            Upload &amp; Download Files
          </h1>
          <p className="mt-8 text-gray-600">
            Create, edit, copy, move, download your files easily, everywhere,
            every time. Use it as your personal.
          </p>
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className="mb-8 mt-8 flex gap-4 border p-5"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-md ${getBackgroundColor(
                  benefit.type
                )}`}
              >
                {benefit.icon}
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.name}</h3>
                <p className="mb-auto text-sm font-normal leading-[180%] text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="w-full flex-auto md:w-1/2 lg:w-2/3 xl:w-1/2">
        <Image src="/image.png" alt="hero" width={566} height={566} />
      </div>
    </section>
  );
};

export default HowSection;
