import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export default function Question() {
  const faqs = [
    {
      question: "행사는 어디서 진행을 하나요?",
      answer:
        "행사는 광주 소프트웨어 마이스터고 금봉관 (강당)에서 진행이 됩니다!",
    },
  ];
  // const onClick = () => {
  //   window.location.href = "https://www.instagram.com/reflection_conf/";
  // };
  return (
    <div className="flex flex-col w-full mb-[1155px]  items-center">
      <h1 className="w-full mb-[5rem] ml-[46px] text-[40px] font-semibold t">
        자주 묻는 질문
      </h1>

      <div className="w-full max-w-[1200px] mb-10 px-4">
        <Accordion className="flex flex-col gap-4  " type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem
              className="bg-[#1B1C1D]  rounded-[20px]"
              key={index}
              value={index.toString()}
            >
              <AccordionTrigger>
                Q. {faq.question}
                <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-200 mr-4" />
              </AccordionTrigger>
              <AccordionContent>A. {faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* 문의하기  */}
      {/* <div className="w-full flex flex-col md:flex-row justify-center items-center max-w-md mt-4">
        <p className="text-[1rem] font-light md:mr-2 mb-2 md:mb-0">
          더 궁금한 점이 있다면?
        </p>
        <p
          onClick={onClick}
          className="text-[1.25rem] font-semibold cursor-pointer"
        >
          담당자에게 연락하기
        </p>
      </div> */}
    </div>
  );
}
