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
    <div className="sm:w-1/2 phone:w-[400px] m-auto sm:text-lg">
      <div className="bg-bg-elev-1/50 p-8 rounded-t-[9px] sm:h-[155px]">
        <p className="text-text-white-alt">{text}</p>
      </div>
      <div className="px-8 py-5 bg-bg-50/50 rounded-b-[9px] flex items-center gap-4">
        <img src={image} alt={"profile"} />
        <p className="font-light text-text-faded-3">
          <span className="font-medium">{name}</span>, {work}
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
