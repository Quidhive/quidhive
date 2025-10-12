//

import React from "react";
import Image from "next/image";

function QHLogo({ className }: { className?: string }) {
  return (
    <div className={`${className} relative h-10 w-40`}>
      <Image
        src="/qh_logo.svg"
        alt="Picture of the author"
        fill
        className="object-cover rounded-lg"
      />
    </div>
  );
}

export default QHLogo;
