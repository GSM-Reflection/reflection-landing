const dDay = new Date("2024-12-21T13:00:00");

export default function CountDown() {
  const today = new Date();

  const fillZero = (num: number, targetLength: number) => {
    return num.toString().padStart(targetLength, "0");
  };

  return (
    <div className="my-20">
      <h1 className="text-[2rem] font-semibold">comming soon...</h1>
      <p className="text-[4rem] font-semibold">
        D-
        {fillZero(
          Math.floor(
            (dDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
          ),
          2
        )}
        &nbsp;:&nbsp;
        {fillZero(
          Math.floor(
            ((dDay.getTime() - today.getTime()) % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          ),
          2
        )}
        &nbsp;:&nbsp;
        {fillZero(
          Math.floor(
            ((dDay.getTime() - today.getTime()) % (1000 * 60 * 60)) /
              (1000 * 60)
          ),
          2
        )}
      </p>
    </div>
  );
}
