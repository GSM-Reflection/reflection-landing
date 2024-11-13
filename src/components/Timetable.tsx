import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Timetable() {
  return (
    <div className="flex justify-center mb-[4rem]">
      <div className="w-2/3">
        <p className="mb-[5rem] font-[25px] text-center">섹션 시간표</p>
        {/* 개회식 */}
        <p className="text-[#A1A1A1]">13:00 ~ 13:30</p>
        <div className="flex items-center gap-4 mb-[2rem]">
          <p className="text-lg">개회식</p>
          <hr className="flex-grow border-t border-[#6E6E6E]" />
          <p className="text-lg">개회식때 무엇을 할건지 간단히 설명</p>
        </div>

        {/* 컨퍼런스 */}
        <div>
          <p className="text-[#A1A1A1]">13:30 ~ 16:00</p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="p-0">
                <div className="flex items-center gap-4 w-full">
                  <p className="text-lg ">컨퍼런스</p>
                  <hr className="flex-grow border-t border-[#6E6E6E] h-[1px]" />
                  <p className="text-lg ">학교를 졸업하신 선배들과의 만남</p>
                </div>
              </AccordionTrigger>

              <p className=" text-[#6E6E6E] text-sm text-right mb-[2rem]">
                컨퍼런스는 20분 발표 후 10분 휴식으로 진행이 됩니다.
              </p>

              {/* 컨퍼런스 내용 */}
              <AccordionContent>
                <p className="text-[#A1A1A1]">13:30 ~ 13:50</p>
                <div className="flex items-center gap-4 mb-[2rem]">
                  <p className="text-lg">유태관 주무관</p>
                  <hr className="flex-grow border-t border-[#6E6E6E]" />
                  <p className="text-lg">주제 쓰기</p>
                </div>
              </AccordionContent>
              <AccordionContent>
                <p className="text-[#A1A1A1]">13:30 ~ 13:50</p>
                <div className="flex items-center gap-4 mb-[2rem]">
                  <p className="text-lg">유태관 주무관</p>
                  <hr className="flex-grow border-t border-[#6E6E6E]" />
                  <p className="text-lg">주제 쓰기</p>
                </div>
              </AccordionContent>
              <AccordionContent>
                <p className="text-[#A1A1A1]">13:30 ~ 13:50</p>
                <div className="flex items-center gap-4 mb-[2rem]">
                  <p className="text-lg">유태관 주무관</p>
                  <hr className="flex-grow border-t border-[#6E6E6E]" />
                  <p className="text-lg">주제 쓰기</p>
                </div>
              </AccordionContent>
              <AccordionContent>
                <p className="text-[#A1A1A1]">13:30 ~ 13:50</p>
                <div className="flex items-center gap-4 mb-[2rem]">
                  <p className="text-lg">유태관 주무관</p>
                  <hr className="flex-grow border-t border-[#6E6E6E]" />
                  <p className="text-lg">주제 쓰기</p>
                </div>
              </AccordionContent>
              <AccordionContent>
                <p className="text-[#A1A1A1]">13:30 ~ 13:50</p>
                <div className="flex items-center gap-4 mb-[2rem]">
                  <p className="text-lg">유태관 주무관</p>
                  <hr className="flex-grow border-t border-[#6E6E6E]" />
                  <p className="text-lg">주제 쓰기</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* 기수별 대항전 */}
        <p className="text-[#A1A1A1]">16:00 ~ 17:00</p>
        <div className="flex items-center gap-4 mb-[2rem]">
          <p className="text-lg">기수별 대항전</p>
          <hr className="flex-grow border-t border-[#6E6E6E]" />
          <p className="text-lg">어떠한 이벤트가 준비되어 있는지 간단히 설명</p>
        </div>

        {/* 네트워킹 */}
        <p className="text-[#A1A1A1]">16:00 ~ 17:00</p>
        <div className="flex items-center gap-4 mb-[2rem]">
          <p className="text-lg">네트워킹</p>
          <hr className="flex-grow border-t border-[#6E6E6E]" />
          <p className="text-lg">어떠한 이벤트가 준비되어 있는지 간단히 설명</p>
        </div>
      </div>
    </div>
  );
}
