//

import React from "react";

type HIWType = {
  img: string;
  title: string;
  text: string;
  step: number;
  active: boolean;
  onClick?: () => void;
};

function HowItWorks({ img, title, text, step, active, onClick }: HIWType) {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "bg-bg-75 border-border-1 border-2" : ""
      }  p-4 px-6 flex w-full rounded-lg items-center gap-4 button`}
    >
      <div className="bg-bg-elev-2 p-3 rounded-full">
        <img src={img} className="object-cover" alt={title} />
      </div>
      <div className="text-text-white-alt flex-1">
        <p>
          <span className="font-semibold">Step {step} : </span>
          {title}
        </p>
        <p className="text-sm text-text-faded-2 mt-2">{text}</p>
      </div>
    </div>
  );
}

export default HowItWorks;
