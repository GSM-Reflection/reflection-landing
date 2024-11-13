import { AccordionTrigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export default function ConferenceSession() {
  return (
    <>
      <AccordionTrigger className="p-0 w-full">
        <div className="flex items-center gap-4 w-full relative">
          <p className="text-lg ">컨퍼런스</p>
          <hr className="flex-grow border-t border-[#6E6E6E] h-[1px] " />
          <p className="text-lg ">학교를 졸업하신 선배들과의 만남</p>
          <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200 absolute -right-7" />
        </div>
      </AccordionTrigger>

      <p className=" text-[#6E6E6E] text-sm text-right mb-[2rem]">
        컨퍼런스는 20분 발표 후 10분 휴식으로 진행이 됩니다.
      </p>
    </>
  );
}
