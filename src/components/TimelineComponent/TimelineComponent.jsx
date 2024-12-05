import React from "react";

const events = [
  { day: 1, info: "lksdjklasdjklas x,cvxcvlkxjk lksjlkjsk" },
  { day: 2, info: "zxcxbvcbcnbcnbc cbxcbgfhgfh" },
  { day: 3, info: "qwetytyutioio" },
  { day: 4, info: "ghjghasdaf" },
  { day: 5, info: "cvxcvlkxjk lksjlkjsk" },
];

const TimelineComponent = ({ data }) => {
  console.log("timeline data", data);
  return (
    <div className="mt-12">
      <ul className="timeline timeline-vertical">
        {events.map((event) => (
          <div
            className={`relative flex justify-center items-center w-4/5 mb-6 ${
              event.day % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            key={event.day}
          >
            <li className="flex items-center justify-start" key={event.day}>
              <div className="timeline-start">{event.day}</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">
                First Macintosh computer
              </div>
              <hr />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TimelineComponent;
