import { Button } from "./ui/button";

export default function Title() {
  return (
    <div className="flex w-full h-dvh justify-center items-center">
      <div className="w-3/4 h-1/2 flex flex-col gap-4">
        <h1 className="text-5xl leading-tight font-light text-start text-foreground flex">
          <p>welcome&nbsp;</p>
          <p>
            to reflection
            <br></br>
            back gsm
          </p>
        </h1>
        <div>일시: 24.12.21 (토) 장소: 광주소프트웨어마이스터고등학교</div>
        <Button
          className="w-80 h-20 rounded-3xl bg-[#595959] text-lg"
          size="lg"
        >
          사전 예약
        </Button>
      </div>
    </div>
  );
}
