/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 60}px`);
  };

  return (
    <div
      className="space-y-1 mt-2 overflow-hidden"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <div className="cursor-pointer pb-0 flex mt-2 items-center justify-between text-lg text-gray-700 font-medium">
        <div className="flex flex-row gap-6 items-center justify-center">
          <div
            className={`px-6 py-2 border-2  ${
              state ? "border-[#2DA5F3] text-[#2DA5F3]" : "border-gray-200"
            } rounded-md`}
          >
            <h1>Day {faqsList?.day} </h1>
          </div>

          <h1>{faqsList?.title}</h1>
        </div>
        {state ? (
          <div className="h-[30px] w-[30px] bg-white border-2 border-gray-400 rounded-md px-1  flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          </div>
        ) : (
          <div className="h-[30px] w-[30px] bg-white border-2 border-gray-400 rounded-md px-1  flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        )}
      </div>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        {faqsList?.activities.map((activity) => (
          <div>
            <div className="flex flex-row gap-6 items-start justify-start mt-4 px-3">
              <img
                src="https://wanderon.in/assets/svg/point.png"
                className="w-6 h-6"
              />
              <p className=" text-gray-500">{activity.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HelpFAQ = ({ data }) => {
  console.log("Help FAQ Data", data);
  const faqsList = [
    {
      day: 1,
      title: "Title",
      q: "Leh Arrival and Acclimatization",
      a: [
        "Welcome to Leh, the heart of Ladakh! After a thrilling journey, it's time to take a break and let your body adjust to the altitude.",
        "Check in and indulge in a day of complete relaxation to rejuvenate your senses. Let your body acclimatize and feel the refreshing mountain air fill your lungs.",
        "Enjoy your meal & stay while getting acclimatized to the climate.",
        "Overnight stay at the hotel.",
      ],
    },
    {
      day: 2,
      title: "Title 2",
      q: "Leh to Nubra over Khardung La, Overnight stay in Nubra ",
      a: [
        " It's time to wake up and start your day with a delicious breakfast at the hotel. Get ready to explore the mesmerizing city of Leh with our local sightseeing tour.",
        " The city is adorned with many architectural and natural wonders that will leave you spellbound.",
        " Visit the Hall of Fame, a museum dedicated to the Indian Army's bravery and sacrifices.",
        " Next, witness the marvel of the Magnetic Hill, where your vehicle will appear to defy gravity, and the Pathar Sahib Gurudwara, a Sikh shrine built to commemorate the visit of Guru Nanak Dev to Ladakh.",
        "As the evening sets in, it's time to unwind and get accustomed to the high altitude. Enjoy some free time for leisure and exploration.",
        "Take a walk through the colorful Leh market, shop for souvenirs, or sip on some hot tea at the charming cafes around.",
        "Return to your hotel by evening for a delicious dinner and a cozy overnight stay. Ladakh has so much to offer, and you're just getting started!",
      ],
    },
    {
      day: "Day 3",
      q: "Nubra Valley to Turtuk to Nubra Valley - Overnight stay in Diskit.",
      a: [
        "Get ready for an adventure-packed day as you kick-start your morning with a hearty breakfast at the hotel.",
        "Today, we'll take you on a thrilling ride to Nubra Valley via Khardung-La, which is not only one of the highest motorable roads in the world but also offers stunning views of the snow-capped peaks that surround it.",
        " Before reaching Nubra Valley, we'll make a pit stop at the majestic Shanti Stupa, a stunning white-domed Buddhist stupa offering panoramic views of the city.",
        " To add more charm to your trip, we'll also take you to visit some of the ancient monasteries around, where you can learn about the culture and traditions of the locals.",
        "As the sun sets, return to your hotel and unwind with a delicious dinner, followed by a peaceful sleep under the starry sky.",
      ],
    },
    {
      day: "Day 4",
      q: "Leh Local Sight Seeing. Overnight stay in Leh ",
      a: [
        " Wake up early morning to witness a mesmerizing sunrise.",
        "Enjoy a delicious breakfast and bid adieu to the stunning Pangong Tso as you journey back to Leh. Along the way, visit one the highest motorable roads in the world - Chang-La Pass, which stands tall at 5350 meters above sea level.",
        "Explore the picturesque landscapes that surround the Chang-La Pass and soak in the breathtaking views of the towering mountains and lush green valleys.",
        "As you make your way back to Leh, take some time to explore the vibrant local markets and cafes, and pick up some souvenirs for your loved ones back home.",
        "With the sun setting in the distance, wind down your day with a delicious dinner and a restful night's sleep in your cozy hotel room. It's the perfect end to an unforgettable journey through the captivating landscapes of Leh.",
      ],
    },
    {
      day: "Day 5",
      q: "Leh to Dehradun",
      a: [
        " After a hearty breakfast, it's time to head to the airport and say goodbye to the beauty of Leh.",
        " Pack your bags and your heart with cherished memories as you bid adieu to this mesmerizing land.",
      ],
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1 mt-12 md:mt-0 bg-white p-2 rounded-lg ">
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
