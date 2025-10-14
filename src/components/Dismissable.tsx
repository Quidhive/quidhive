//
"use client";
import React, { ReactNode, useEffect, useRef } from "react";

type DismissType = {
  children: ReactNode;
  onClickOutside: () => void;
};

function Dismissable({ children, onClickOutside }: DismissType) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const hideProfile = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside();
      }
    };
    if (typeof window === "object") {
      document.addEventListener("mousedown", hideProfile);
    }
    return () => {
      document.removeEventListener("mousedown", hideProfile);
    };
  }, []);
  return <div ref={ref}>{children}</div>;
}

export default Dismissable;
