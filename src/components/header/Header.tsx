//

import React from "react";
import QHLogo from "../logo/QHLogo";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "../button/QHButton";

function Header() {
  return (
    <div className="flex items-center fixed w-[90%] top-5 z-20 justify-between left-1/2 -translate-x-1/2 p-2 bg-bg-elev-2 rounded-full px-10">
      <QHLogo />
      <div className="flex items-center gap-7">
        <div className="flex items-center text-sm text-text-white-alt font-medium">
          <p>Products</p>
          <MdKeyboardArrowDown size={20} />
        </div>
        <div className="flex items-center text-sm text-text-white-alt font-medium">
          <p>Resources</p>
          <MdKeyboardArrowDown size={20} />
        </div>
      </div>
      <div className="gap-2 flex">
        <Button size="big" btnType="secondary">
          <div>Login</div>
        </Button>
        <Button>
          <div>Sign up</div>
        </Button>
      </div>
    </div>
  );
}

export default Header;
