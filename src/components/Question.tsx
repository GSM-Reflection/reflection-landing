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
      answer: "1",
    },
    {
      question: "행사는 어디서 진행을 하나요?",
      answer:
        "행사는 광주 소프트웨어 마이스터고 금봉관 (강당)에서 진행이 됩니다!",
    },
    {
      question: "행사는 어디서 진행을 하나요?",
      answer: "3",
    },
    {
      question: "행사는 어디서 진행을 하나요?",
      answer: "4",
    },
  ];
  const onClick = () => {
    window.location.href = "https://www.instagram.com/reflection_conf/";
  };
  return (
    <div className="flex flex-col w-full mb-[5rem] justify-center items-center">
      <h1 className="mb-[5rem] font-[25px]">많이 들어오는 질문</h1>

      <div className="w-full max-w-[1000px] mb-10 px-4">
        <Accordion className="flex flex-col gap-4" type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem
              className="border border-[#fffff] rounded-[20px]"
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

      <div className="w-full flex flex-col md:flex-row justify-center items-center max-w-md mt-4">
        <p className="text-sm font-light md:mr-2 mb-2 md:mb-0">
          더 궁금한 점이 있다면?
        </p>
        <p onClick={onClick} className="font-semibold cursor-pointer">
          담당자에게 연락하기
        </p>
      </div>
    </div>
  );
}
