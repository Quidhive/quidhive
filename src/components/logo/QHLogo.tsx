//

import React from "react";
import Image from "next/image";

function QHLogo({ className }: { className?: string }) {
  return (
    <div
      className={`${className} relative sm:h-10 sm:w-40 w-[30.5px] h-[33.3px]`}
    >
      <Image
        src="/qh_logo.svg"
        alt="Picture of the author"
        fill
        className="object-cover rounded-lg sm:block hidden"
      />
      <Image
        src="/logos/logo.svg"
        alt="Picture of the author"
        fill
        className="object-cover rounded-lg sm:hidden block"
      />
    </div>
  );
}

export default QHLogo;
