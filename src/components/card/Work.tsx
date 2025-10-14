//

import React from "react";

type WorkType = {
  avatar: string;
  text: string;
};

function Work({ avatar, text }: WorkType) {
  return (
    <div className="flex items-center phone:gap-3 gap-2 bg-bg-elev-1 py-2 phone:px-3 px-2 rounded-md border border-border-2">
      <img src={avatar} className="phone:h-auto h-5" alt="" />
      <p className="text-sm text-primary-white">{text}</p>
    </div>
  );
}

export default Work;
