import clsx from "clsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type ArrowProps = {
  direction: "prev" | "next";
  onClick: () => void;
};

const ArrowIcon = ({ direction, onClick }: ArrowProps) => {
  const arrowClasses = clsx(
    "w-12 h-12 absolute z-10 transform -translate-y-1/2 cursor-pointer bg-[#F4F4F4] hover:bg-primary p-2 -top-11 rounded-full",
    {
      "right-[200px] lg:right-[220px]": direction === "prev",
      "right-[150px]": direction === "next",
      "hidden md:block": true,
    }
  );

  const iconClasses = clsx("text-xl", {
    "font-normal text-slate-400": direction === "prev",
    "text-normal text-slate-400": direction === "next",
  });

  return (
    <div className={arrowClasses} onClick={onClick}>
      <div className='grid h-full place-content-center'>
        {direction === "prev" ? (
          <FaChevronLeft className={iconClasses} />
        ) : (
          <FaChevronRight className={iconClasses} />
        )}
      </div>
    </div>
  );
};

export default ArrowIcon;
