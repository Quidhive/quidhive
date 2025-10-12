//

import React from "react";

type TabType = {
  active: boolean;
  text: string;
  onClick: () => void;
};

function Tab({ active, text, onClick }: TabType) {
  return (
    <button
      onClick={onClick}
      className={`w-1/2 ${active ? "bg-bg-25" : "bg-[#050D2C]"} py-2 rounded`}
    >
      {text}
    </button>
  );
}

export default Tab;
