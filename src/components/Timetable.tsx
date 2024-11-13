import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import ConferenceSession from "./conferenceSession";

const sessionData = [
  { speaker: "유태관 주무관 1", topic: "주제 쓰기 1", time: "13:30 ~ 13:50" },
  { speaker: "유태관 주무관 2", topic: "주제 쓰기 2", time: "13:30 ~ 13:50" },
  { speaker: "유태관 주무관 3", topic: "주제 쓰기 3", time: "13:30 ~ 13:50" },
  { speaker: "유태관 주무관 4", topic: "주제 쓰기 4", time: "13:30 ~ 13:50" },
  { speaker: "유태관 주무관 5", topic: "주제 쓰기 5", time: "13:30 ~ 13:50" },
];

export default function Timetable() {
  return (
    <div className="flex justify-center mb-[6rem] px-4 sm:px-10 lg:px-12">
      <div className="w-full max-w-screen-lg">
        <p className="mb-[5rem] text-[1.5rem] text-center font-light">
          섹션 시간표
        </p>

        {/* 개회식 */}
        <p className="text-[#A1A1A1] text-[1.25rem] mb-6">13:00 ~ 13:30</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-[2rem]">
          <p className="text-[2rem]">개회식</p>
          <hr className="flex-grow border-t border-[#6E6E6E]" />
          <p className="text-[2rem]">개회식때 무엇을 할건지 간단히 설명</p>
        </div>

        {/* 컨퍼런스 */}
        <div>
          <p className="text-[#A1A1A1] text-[1.25rem] mb-6">13:30 ~ 16:00</p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <ConferenceSession />

              {/* 컨퍼런스 내용 */}
              {sessionData.map((session, index) => (
                <AccordionContent className="pr-6" key={index}>
                  <p className="text-[#A1A1A1] text-[1.25rem] mb-6">
                    {session.time}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <p className="text-[2rem]">{session.speaker}</p>
                    <hr className="flex-grow border-t border-[#6E6E6E]" />
                    <p className="text-[2rem]">{session.topic}</p>
                  </div>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        </div>

        {/* 기수별 대항전 */}
        <p className="text-[#A1A1A1] text-[1.25rem] mb-6">16:00 ~ 17:00</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-[2rem]">
          <p className="text-[2rem]">기수별 대항전</p>
          <hr className="flex-grow border-t border-[#6E6E6E]" />
          <p className="text-[2rem]">
            어떠한 이벤트가 준비되어 있는지 간단히 설명
          </p>
        </div>

        {/* 네트워킹 */}
        <p className="text-[#A1A1A1] text-[1.25rem] mb-6">16:00 ~ 17:00</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-[2rem]">
          <p className="text-[2rem]">네트워킹</p>
          <hr className="flex-grow border-t border-[#6E6E6E]" />
          <p className="text-[2rem]">
            어떠한 이벤트가 준비되어 있는지 간단히 설명
          </p>
        </div>
      </div>
    </div>
  );
}
