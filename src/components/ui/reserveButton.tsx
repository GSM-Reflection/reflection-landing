import { Button } from "./button";

export default function ReserveButton() {
  return (
    <Button className="relative w-48 h-14">
      사전예약 하러가기
      <div className="w-full h-full border-[1.5px] border-accent absolute rounded-lg top-[6px] left-[8px]"></div>
    </Button>
  );
}
