//

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export type FaqType = {
  quest: string;
  ans: ReactNode;
  show: boolean;
  onClick?: () => void;
};

function Faq({ quest, ans, show, onClick }: FaqType) {
  return (
    <div
      onClick={onClick}
      className="bg-bg-75 p-6 px-8 rounded-[9px] link mt-5"
    >
      <div className="flex items-center text-text-faded-3 justify-between">
        <p className="text-lg font-bold">{quest}</p>
        <div className="bg-bg-50 p-2 rounded-full">
          {show ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="text-sm text-text-faded-2 mt-5 pr-30 overflow-hidden"
          >
            {ans}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Faq;
