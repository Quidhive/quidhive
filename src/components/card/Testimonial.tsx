//

import React from "react";

type TestimonialType = {
  text: string;
  name: string;
  work: string;
  image: string;
};

function Testimonial({ text, name, work, image }: TestimonialType) {
  return (
    <div className="w-1/2 text-lg">
      <div className="bg-bg-elev-1/50 p-7 rounded-t-[9px] pb-10">
        <p className="text-text-white-alt">{text}</p>
      </div>
      <div className="px-5 py-3 bg-bg-50/50 rounded-b-[9px] flex items-center gap-4">
        <img src={image} alt="" />
        <p className="font-light text-text-faded-3">
          <span className="font-medium">{name}</span>, {work}
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
