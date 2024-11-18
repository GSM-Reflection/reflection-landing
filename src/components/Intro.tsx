// import CountDown from "./CountDown";
import WhatIsThis from "./WhatIsThis";

export default function Intro() {
  return (
    <div className="flex flex-col items-center gap-[32px] text-[1.5rem] my-[200px]">
      <WhatIsThis />
      {/* <CountDown /> */}
    </div>
  );
}
