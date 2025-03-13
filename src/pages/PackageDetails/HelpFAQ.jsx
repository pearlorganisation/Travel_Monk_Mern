/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    setState(!state);
  };

  useEffect(() => {
    if (state && answerElRef.current) {
      setAnswerH(`${answerElRef.current.scrollHeight}px`);
    } else {
      setAnswerH("0px");
    }
  }, [state]);

  return (
    <div
      className="space-y-1 mt-2 overflow-hidden"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <div className="cursor-pointer pb-0 flex mt-2 items-center justify-between text-lg text-gray-700 font-medium">
        <div className="flex flex-row gap-6 items-center justify-center">
          <div
            className={`px-6 py-2 border-2  ${state ? "border-[#2DA5F3] text-[#2DA5F3]" : "border-gray-200"
              } rounded-md`}
          >
            <h1>Day {faqsList?.day} </h1>
          </div>

          <h1>{faqsList?.title}</h1>
        </div>
        {state ? (
          <div className="h-[30px] w-[30px] bg-white border-2 border-gray-400 rounded-md px-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
            </svg>
          </div>
        ) : (
          <div className="h-[30px] w-[30px] bg-white border-2 border-gray-400 rounded-md px-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        )}
      </div>
      <div
        ref={answerElRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ height: answerH }}
      >
        {faqsList?.activities.map((activity, index) => (
          <div key={index} className="flex flex-row gap-6 items-start justify-start mt-4 px-3">
            <img src="https://wanderon.in/assets/svg/point.png" className="w-6 h-6" />
            <p className="text-gray-500">{activity.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const HelpFAQ = ({ data }) => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1 mt-12 md:mt-0 bg-white p-2 rounded-lg">
          <ul className="space-y-4 divide-y">
            {data?.map((item, idx) => (
              <FaqsCard idx={idx} faqsList={item} key={idx} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HelpFAQ;
