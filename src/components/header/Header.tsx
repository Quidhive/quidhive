//
"use client";
import React, { useState } from "react";
import QHLogo from "../logo/QHLogo";
import { MdClose, MdKeyboardArrowDown, MdOutlineMenu } from "react-icons/md";
import Button from "../button/QHButton";
import { products } from "@/utils/constants/constants.utils";
import { AnimatePresence, motion } from "framer-motion";
import Dismissable from "../Dismissable";

function Header({ func }: { func: () => void }) {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <Dismissable onClickOutside={() => setShow(false)}>
        <div
          className={`w-full bg-bg-elev-2 h-[301px] fixed left-0 z-30 p-3 px-5 rounded-xl ${
            show ? "top-0" : "-top-80"
          } transitioncss md:hidden`}
        >
          <div className="flex items-center justify-between">
            <QHLogo />
            <div className="gap-2 flex items-center">
              <div className="hidden">
                <Button size="small" btnType="secondary">
                  <div>Login</div>
                </Button>
                <Button size="small">
                  <div>Sign up</div>
                </Button>
              </div>

              <div
                onClick={() => setShow(false)}
                className="text-text-white-alt link"
              >
                <MdClose size={20} />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <p className="text-text-white-alt font-medium">Products</p>
              <div className="font-semibold mt-4">
                <p>Hive</p>
                <p className="mt-3">Swap</p>
                <div className="flex items-center mt-3 gap-3">
                  <p className="">Pollen Card</p>
                  <p className="text-xs text-button-green bg-bg-25 px-2 rounded-full">
                    coming soon
                  </p>
                </div>
              </div>
              <p className="text-text-white-alt font-medium mt-8">Resources</p>
            </div>
          </div>
        </div>
      </Dismissable>
      <div className="bg-bg-100/80 w-full fixed top-0 left-0 z-50">
        <div
          className={`${
            hover ? " rounded-3xl md:pb-4" : " rounded-full"
          } xl:w-[1145px] phone:w-[90%] w-[95%] m-auto mt-8 bg-bg-elev-2 px-10 transition md:py-0 py-3`}
        >
          <div className="flex items-center w-full justify-between">
            <QHLogo />
            <div className="md:flex items-center gap-7 hidden">
              <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`flex items-center text-sm text-text-white-alt hover:text-text-blue font-medium link py-7`}
              >
                <p>Products</p>
                <MdKeyboardArrowDown size={20} />
              </div>
              <div className="flex items-center text-sm text-text-white-alt font-medium">
                <p>Resources</p>
                <MdKeyboardArrowDown size={20} />
              </div>
            </div>
            {/* <div className="gap-2 md:flex hidden"> */}
            <div className="gap-2 hidden">
              <Button size="big" btnType="secondary">
                <div>Login</div>
              </Button>
              <Button>
                <div>Sign up</div>
              </Button>
            </div>

            {/* <div className="gap-2 md:hidden flex items-center"> */}
            <div className="gap-2 flex items-center">
              {/* remove the div  */}
              <div className="hidden">
                <Button size="small" btnType="secondary">
                  <div>Login</div>
                </Button>
                <Button size="small">
                  <div>Sign up</div>
                </Button>
              </div>
              {/* remove this too  */}
              <div>
                <Button onClick={func}>
                  <div>Join waitlist</div>
                </Button>
              </div>
              <div
                onClick={() => setShow(true)}
                className="text-text-white-alt link sm:hidden"
              >
                <MdOutlineMenu size={20} />
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`${hover && "pt-6"} flex gap-7`}
          >
            <ProductsDropdown show={hover} />
          </div>
        </div>
      </div>
    </>
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
