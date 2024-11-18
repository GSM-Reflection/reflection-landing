import ContentGuide from "../ui/contentGuide";
import Session, { SessionData } from "./Session";

const sessions: SessionData[] = [
  {
    isSsul: false,
    title: "세션 제목",
    time: "10:00 ~ 11:00",
    speaker: [
      {
        name: "홍길동",
        position: "우아한 개발자",
        image: "/images/hong.png",
      },
      {
        name: "홍길동",
        position: "우아한 개발자",
        image: "/images/hong.png",
      },
    ],
  },
  {
    isSsul: true,
    title: "세션 제목",
    time: "10:00 ~ 11:00",
    speaker: [
      {
        name: "홍길동",
        position: "우아한 개발자",
        image: "/images/hong.png",
      },
    ],
  },
  {
    isSsul: true,
    title: "세션 제목",
    time: "10:00 ~ 11:00",
    speaker: [
      {
        name: "홍길동",
        position: "우아한 개발자",
        image: "/images/hong.png",
      },
    ],
  },
  {
    isSsul: true,
    title: "세션 제목",
    time: "10:00 ~ 11:00",
    speaker: [
      {
        name: "홍길동",
        position: "우아한 개발자",
        image: "/images/hong.png",
      },
    ],
  },
  {
    isSsul: false,
    title: "세션 제목",
    time: "10:00 ~ 11:00",
    speaker: [
      {
        name: "홍길동",
        position: "우아한 개발자",
        image: "/images/hong.png",
      },
    ],
  },
];

export default function Timetable() {
  return (
    <ContentGuide>
      <h1 className="text-[3rem] font-semibold">세션</h1>
      <div className="flex flex-col w-full">
        {sessions.map((session, index) => (
          <Session key={index} session={session} />
        ))}
      </div>
    </ContentGuide>
  );
}
