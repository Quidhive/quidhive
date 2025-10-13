//

import { motion } from "framer-motion";
import Work from "../card/Work";

type ScrollerType = {
  avatar: string;
  text: string;
};

export default function WorkScroller({ items }: { items: ScrollerType[] }) {
  const loopItems = [...items, ...items, ...items];
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute left-0 z-10 top-0 h-full w-20 pointer-events-none bg-gradient-to-r from-bg-75 to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-20 pointer-events-none bg-gradient-to-l from-bg-75 z-10 to-transparent"></div>

      {/* Scrolling content */}
      <motion.div
        className="flex w-max gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {loopItems.map((item, i) => (
          <Work key={i} avatar={item.avatar} text={item.text} />
        ))}
      </motion.div>
    </div>
  );
}
