import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import ConferenceSession from "./conferenceSession";

export default function Timetable() {
  return (
    <div className="flex justify-center mb-[4rem]">
      <div className="w-2/3">
        <p className="mb-[5rem] text-[1.5rem] text-center font-light">
          섹션 시간표
        </p>
        {/* 개회식 */}
        <p className="text-[#A1A1A1] text-[1.25rem] mb-6">13:00 ~ 13:30</p>
        <div className="flex items-center gap-4 mb-[2rem]">
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
              <AccordionContent className="pr-6">
                <p className="text-[#A1A1A1] text-[1.25rem] mb-6">
                  13:30 ~ 13:50
                </p>
                <div className="flex items-center gap-4 ">
                  <p className="text-[2rem]">유태관 주무관</p>
                  <hr className="flex-grow border-t border-[#6E6E6E]" />
                  <p className="text-[2rem]">주제 쓰기</p>
                </div>
              </AccordionContent>
              <AccordionContent className="pr-6">
                <p className="text-[#A1A1A1] text-[1.25rem] mb-6">
                  13:30 ~ 13:50
                </p>
                <div className="flex items-center gap-4 ">
                  <p className="text-[2rem]">유태관 주무관</p>
                  <hr className="flex-grow border-t border-[#6E6E6E]" />
                  <p className="text-[2rem]">주제 쓰기</p>
                </div>
              </AccordionContent>
              <AccordionContent className="pr-6">
                <p className="text-[#A1A1A1] text-[1.25rem] mb-6">
                  13:30 ~ 13:50
                </p>
                <div className="flex items-center gap-4 ">
                  <p className="text-[2rem]">유태관 주무관</p>
                  <hr className="flex-grow border-t border-[#6E6E6E]" />
                  <p className="text-[2rem]">주제 쓰기</p>
                </div>
              </AccordionContent>
              <AccordionContent className="pr-6">
                <p className="text-[#A1A1A1] text-[1.25rem] mb-6">
                  13:30 ~ 13:50
                </p>
                <div className="flex items-center gap-4 ">
                  <p className="text-[2rem]">유태관 주무관</p>
                  <hr className="flex-grow border-t border-[#6E6E6E]" />
                  <p className="text-[2rem]">주제 쓰기</p>
                </div>
              </AccordionContent>
              <AccordionContent className="pr-6">
                <p className="text-[#A1A1A1] text-[1.25rem] mb-6">
                  13:30 ~ 13:50
                </p>
                <div className="flex items-center gap-4 mb-[2rem]">
                  <p className="text-[2rem]">유태관 주무관</p>
                  <hr className="flex-grow border-t border-[#6E6E6E]" />
                  <p className="text-[2rem]">주제 쓰기</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* 기수별 대항전 */}
        <p className="text-[#A1A1A1] text-[1.25rem] mb-6">16:00 ~ 17:00</p>
        <div className="flex items-center gap-4 mb-[2rem]">
          <p className="text-[2rem]">기수별 대항전</p>
          <hr className="flex-grow border-t border-[#6E6E6E]" />
          <p className="text-[2rem]">
            어떠한 이벤트가 준비되어 있는지 간단히 설명
          </p>
        </div>

        {/* 네트워킹 */}
        <p className="text-[#A1A1A1] text-[1.25rem] mb-6">16:00 ~ 17:00</p>
        <div className="flex items-center gap-4 mb-[2rem]">
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
