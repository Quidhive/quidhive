//

import React from "react";

type HIWType = {
  img: string;
  title: string;
  text: string;
  step: number;
  active: boolean;
  image: string;
  onClick?: () => void;
};

function HowItWorks({
  img,
  title,
  text,
  step,
  active,
  onClick,
  image,
}: HIWType) {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "bg-bg-75 border-2" : "sm:border-none"
      }  p-4 px-6 w-full rounded-lg link border-border-1 border-2`}
    >
      <div className="flex items-center gap-4">
        <div className="bg-bg-elev-2 p-3 rounded-full phone:block hidden">
          <img src={img} className="object-cover" alt={title} />
        </div>
        <div className="text-text-white-alt flex-1">
          <p className="phone:font-normal font-semibold">
            <span className="font-semibold">Step {step} : </span>
            {title}
          </p>
          <p className="text-sm text-text-faded-2 mt-2">{text}</p>
        </div>
      </div>
      {
        <img
          className="h-auto w-auto sm:hidden block mt-10"
          src={image}
          alt={title}
        />
      }
    </div>
  );
}

export default HowItWorks;
