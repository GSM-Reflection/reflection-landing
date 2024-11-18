export interface SessionData {
  title: string;
  time: string;
  speaker: Speaker[];
  isSsul: boolean;
}

interface Speaker {
  name: string;
  position: string;
  image: string;
}

interface SessionProps {
  session: SessionData;
}

export default function Session(prop: SessionProps) {
  return (
    <div className="w-full">
      <div className="flex gap-28">
        <p className="pt-10 text-[2rem]">{prop.session.time}</p>
        <div className="py-10 px-8 flex-grow">
          <div className="w-1/2 flex flex-col gap-4 items-start">
            {prop.session.isSsul ? (
              <span className="bg-[#FF612C] text-black text-xl py-1 px-4">
                썰
              </span>
            ) : (
              ""
            )}
            <h2 className="text-3xl">{prop.session.title}</h2>
          </div>
          <div className="flex mt-8 gap-8">
            {prop.session.speaker.map((speaker, index) => (
              <div key={index} className="flex gap-5">
                <div className="rounded-full bg-white w-[3.37rem] h-[3.37rem]">
                  <img
                    src={speaker.image}
                    alt="speaker"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="mt-1 text-lg leading-6">
                  <p>{speaker.name}</p>
                  <p className="text-[#BFC0C0]">{speaker.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-[#2D2E30]"></hr>
    </div>
  );
}
