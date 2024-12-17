/* eslint-disable react/prop-types */
import DrawSvg from "./DrawSvg";

const Roadmap = () => {
  return (
    <section className="min-h-screen w-screen relative">
      <h1 className="text-4xl capitalize flex justify-center items-center m-4 mx-auto border-b-2 border-black w-fit">
        Timeline
      </h1>

      <div className="w-4/5 min-h-max mx-auto flex justify-center items-center relative">
        <div className="flex justify-center items-center">
          <DrawSvg />
        </div>

        <ul className="list-none w-full h-full flex flex-col justify-center items-center bg-blue-200">
          <li className="w-full h-full flex">&nbsp;</li>

          <TimelineItem
            title="Day 1"
            text="Day Details dsfdsfmmdsf dskjfhsldkjfsf kjdhsfkjdshf kjdsfhkjsdf"
          />

          <TimelineItem
            title="Day 2"
            text="Day Details dsfdsfmmdsf dskjfhsldkjfsf kjdhsfkjdshf kjdsfhkjsdf"
          />

          <TimelineItem
            title="Day 3"
            text="Day Details dsfdsfmmdsf dskjfhsldkjfsf kjdhsfkjdshf kjdsfhkjsdf"
          />

          <TimelineItem
            title="Day 4"
            text="Day Details dsfdsfmmdsf dskjfhsldkjfsf kjdhsfkjdshf kjdsfhkjsdf"
          />

          {/* <li className="w-full h-full flex odd:justify-start even:justify-end invisible">
            <div className="w-2/5 h-14"></div>
          </li>
          */}
          <li className="w-full h-full flex odd:justify-start even:justify-end invisible">
            <div className="w-2/5 h-14"></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

const TimelineItem = ({ title, text }) => {
  return (
    <li className="w-full h-full flex odd:justify-start even:justify-end">
      <div
        className="w-2/5 h-fit p-4 border-4 border-black 
        odd:rounded-[50px_0_50px_0] even:rounded-[0_50px_0_50px] 
        odd:text-right even:text-left"
      >
        <div
          className="relative p-4 bg-white text-red-500 border border-green-500 
          odd:rounded-[40px_0_40px_0] even:rounded-[0_40px_0_40px]"
        >
          <span className="block text-2xl capitalize text-black">{title}</span>
          <span className="block text-2xl capitalize font-normal mt-2 text-red-500">
            {text}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Roadmap;
