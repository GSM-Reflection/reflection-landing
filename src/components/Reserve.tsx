import ReserveButton from "./ui/reserveButton";
import reflectionText from "../assets/reflectionText.svg";

export default function Reserve() {
  return (
    <div
      className="flex w-full h-dvh justify-center"
      style={{ backgroundImage: `url('/src/assets/bg.svg')` }}
    >
      <div className="mt-[458px]">
        <div className="mb-[238px]">
          <img src={reflectionText} alt="" className="mb-[16px]" />
          <div className="flex justify-between text-[40px]">
            <p className="">Those of us who</p>
            <p>came back to school</p>
          </div>
        </div>
        <div className="flex justify-center">
          <ReserveButton />
        </div>
      </div>
    </div>
  );
}
