//

import React from "react";

type UpcomingType = {
  img: string;
  title: string;
  text: string;
  textColor: string;
};

function Upcoming({ img, title, text, textColor }: UpcomingType) {
  return (
    <div className="bg-bg-50 px-10 sm:w-1/2 phone:w-[400px] m-auto flex flex-col items-center pb-6 rounded-t-[10px]">
      <img src={img} className="w-[336px]" alt={title} />
      <div className="lg:w-[336px] m-auto mt-14">
        <div className="flex items-center gap-3">
          <p className="font-semibold text-lg text-text-faded-3">{title}</p>
          <p
            className={`text-xs bg-bg-25 px-2 py-[2px] rounded-full ${textColor}`}
          >
            coming soon
          </p>
        </div>
        <p className="mt-7 text-text-faded-2 text-sm">{text}</p>
      </div>
    </div>
  );
}

export default Upcoming;
