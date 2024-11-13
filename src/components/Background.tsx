import CountDown from "./CountDown";
import WhatIsThis from "./WhatIsThis";

export default function Background() {
  return (
    <div className="flex flex-col items-center gap-12 text-[1.5rem]">
      <WhatIsThis />
      <CountDown />
    </div>
  );
}
