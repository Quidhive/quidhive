//

import React from "react";

type WorkType = {
  avatar: string;
  text: string;
};

function Work({ avatar, text }: WorkType) {
  return (
    <div className="flex grow items-center gap-3 bg-bg-elev-1 py-2 px-3 rounded-md border border-border-2">
      <img src={avatar} alt="" />
      <p className="text-sm text-primary-white">{text}</p>
    </div>
  );
}

export default Work;
