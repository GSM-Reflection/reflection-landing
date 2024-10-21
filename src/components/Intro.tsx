import ReserveButton from "./ui/reserveButton";

export default function Intro() {
  return (
    <div className="flex w-full h-dvh justify-center items-center">
      <div className="w-3/4 h-1/2 flex flex-col gap-4">
        <h1 className="text-5xl leading-tight font-light text-start text-foreground flex">
          <p>welcome</p>
          <p>
            &nbsp;to reflection
            <br></br>
            back GSM
          </p>
        </h1>
        <div>일시: 24.12.21 (토) 장소: 광주소프트웨어마이스터고등학교</div>
        <div className="flex flex-col gap-2 font-medium">
          <p>미리 사전예약을 하고싶은 분은?</p>
          <ReserveButton />
        </div>
      </div>
    </div>
  );
}
