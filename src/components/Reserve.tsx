import ReserveButton from "./ui/reserveButton";
import reflectionText from "../assets/reflectionText.svg";

export default function Reserve() {
  return (
    <div
      className="flex w-full h-dvh justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/bg.svg')` }}
    >
      <div className="mt-[363px] px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="mb-[210px] lg:mb-[238px]">
          <img src={reflectionText} alt="" className="mb-[16px]" />
          <div className="flex flex-col md:flex-row justify-between text-[40px] font-pen  text-[#ffffffa8]">
            <p>Those of us who</p>
            <p className="text-end">came back to school</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-full w-full flex justify-center">
            <ReserveButton />
          </div>
        </div>
      </div>
    </div>
  );
}
