//

import React from "react";

type BFRType = {
  img: string;
  title: string;
  text: string;
};

function BFACard({ img, title, text }: BFRType) {
  return (
    <div className="bg-bg-50 w-1/3 p-7 flex flex-col items-start rounded-lg">
      <div className="bg-bg-75 p-2 rounded-xl">
        <img src={img} alt={title} />
      </div>
      <p className="mt-4 font-semibold text-text-faded-3">{title}</p>
      <p className="text-text-faded text-sm mt-4">{text}</p>
    </div>
  );
}

export default BFACard;
