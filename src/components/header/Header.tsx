//
"use client";
import React, { useState } from "react";
import QHLogo from "../logo/QHLogo";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "../button/QHButton";
import { products } from "@/utils/constants/constants.utils";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`${
        hover ? " rounded-3xl" : " rounded-full"
      } fixed w-[1145px] top-5 z-20 left-1/2 -translate-x-1/2 p-2 bg-bg-elev-2 px-10 py-4 transition`}
    >
      <div className="flex items-center w-full justify-between">
        <QHLogo />
        <div className="flex items-center gap-7">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex items-center text-sm text-text-white-alt hover:text-text-blue font-medium link`}
          >
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
      <div
        // onMouseEnter={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
        className={`${hover && "pt-6"} flex gap-7`}
      >
        <ProductsDropdown show={hover} />
      </div>
    </div>
  );
}

export default Header;

type ProductsType = {
  img: string;
  title: string;
  text: string;
  coming?: boolean;
};

function Products({ img, text, title, coming }: ProductsType) {
  return (
    <div className="bg-bg-elev-1 p-4 px-6 rounded-[9px] w-1/3">
      <div className="flex items-center gap-5">
        <div className="bg-bg-75 p-3 rounded-xl">
          <img src={img} alt={title} />
        </div>
        <p className="font-semibold">{title}</p>
        {coming && (
          <p
            className={`text-xs bg-bg-25 px-2 py-[2px] rounded-full text-button-green`}
          >
            coming soon
          </p>
        )}
      </div>
      <p className="mt-4 text-sm text-text-faded-3">{text}</p>
    </div>
  );
}

function ProductsDropdown({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -10, height: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-bg-elev-2 rounded-3xl shadow-lg"
        >
          <div className="flex gap-7">
            {products.map((obj, index) => (
              <Products
                key={index}
                img={obj.img}
                title={obj.title}
                text={obj.text}
                coming={obj.coming!}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
