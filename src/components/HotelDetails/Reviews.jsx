import React from "react";

const reviewCards = [
  {
    id: 1,
    rating: "5.0",
    type: "Excellent",
    review: "Fantastic Stay !",
    postedBy: {
      name: "Mahesh",
      date: "28 Aug, 2024",
    },
    reviewDetails:
      "  Offeringthe Ginger Promise askdjhaksd aslkdjasd alskdjlasdj asldkjalsjkd asldkjaljsd alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja asldkjalsjkd asldkjaljsd alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja",
  },
  {
    id: 2,
    rating: "4.8",
    type: "Excellent",
    review: "Clean, efficient and great restuarant",
    postedBy: {
      name: "Ramesh",
      date: "30 Aug, 2024",
    },
    reviewDetails:
      "  Offeringthe Ginger Promise askdjhaksd aslkdjasd alskdjlasdj asldkjalsjkd asldkjaljsd alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja asldkjalsjkd asldkjaljsd alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja",
  },
  {
    id: 3,
    rating: "4.6",
    type: "Excellent",
    review: "Exceptional",
    postedBy: {
      name: "Suresh",
      date: "2 Sep, 2024",
    },
    reviewDetails:
      "  Offeringthe Ginger Promise askdjhaksd aslkdjasd alskdjlasdj asldkjalsjkd asldkjaljsd alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja asldkjalsjkd asldkjaljsd alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja alsdkjlkasjdkl aslkdjlasdjlaksd lkjasdlja lkjasdlkjaslk alskdjlaksjkla alksdjlkasjdlkasjd lkajsdlkajdlkajsd alkjdlakjdlkajd lkajsdlkasjlasd lakjsdlkja",
  },
];

const Reviews2 = () => {
  return (
    <div>
      <h1 className="mt-12 text-extrabold text-2xl">
        Reviews of Casa Hotels and Suites , Gachibowli ,Hyderabad from real
        guests .
      </h1>

      {reviewCards.map((reviewCard) => (
        <div className="mt-2  rounded-xl w-full bg-gray-200 p-4">
          <div className="flex flex-row gap-12 justify-start items-start">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-md font-bold bg-red-700 text-white px-3 py-1 rounded-md">
                {reviewCard.rating}
              </h1>
              <h3> {reviewCard.type}</h3>
            </div>

            <div>
              <div className="">
                <h1>{reviewCard.review}</h1>
                <p className="text-gray-400 mt-3 text-sm">
                  {reviewCard.postedBy.name}, Reviewed on{" "}
                  {reviewCard.postedBy.date}
                </p>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                {reviewCard.reviewDetails}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews2;
