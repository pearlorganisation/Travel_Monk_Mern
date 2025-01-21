import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Matěj Šolar',
    image: 'src/assets/images/Ellipse 2.png',
    text: 'Thank you for your help with exploring Assam. One week of amazing experiences. I had problems settling detailed plans of the trip, but Travel Monk helped us with all arrangements.',
  },
  {
    id: 2,
    name: 'Raja Gopal Babu',
    image: 'src/assets/images/Ellipse 2 (1).png',
    text: 'We have just finished our Ladakh trip. The itinerary was well-planned and arrangements were excellent. Travel Monk’s Sourabh did an excellent job! Special thanks to our driver.',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-10">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        Testimonials
      </h2>

      {/* Testimonials Wrapper */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-full md:w-1/3 lg:w-[400px] bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Testimonial Card Content */}
            <div className="flex items-start gap-4 ">
              {/* Image */}
              <div className="flex-shrink-0 self-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-2 border-blue-400 flex  self-center"
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  {testimonial.text.length > 100
                    ? `${testimonial.text.substring(0, 100)}...`
                    : testimonial.text}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline mt-2 block"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
