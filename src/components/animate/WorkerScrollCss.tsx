//

import Work from "../card/Work";

type ScrollerType = {
  avatar: string;
  text: string;
};
export default function WorkScrollerCss({
  items,
  className,
}: {
  items: ScrollerType[];
  className?: string;
}) {
  // Duplicate items for seamless loop
  const loopItems = [...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden`}>
      {/* Gradient edges */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-bg-75 to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-bg-75 to-transparent"></div>

      <div className="scroller">
        <div className={`${className} scroller-track`}>
          {loopItems.map((item, i) => (
            <Work key={i} avatar={item.avatar} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
