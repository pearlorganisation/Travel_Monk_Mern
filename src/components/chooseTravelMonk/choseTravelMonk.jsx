import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Button from '@mui/material/Button';

function ChoseTravelMonkSec() {
  return (
    <div className="bg-gray-100">
      <h1 className="text-black font-bold mx-auto text-center py-10 text-3xl">
        Why Choose Travel Monk?
      </h1>
      <div className="flex flex-row max-w-6xl items-center justify-center mx-auto">
        {/* Image Section */}
        <div className="px-4 py-10">
          <img
            src="src/assets/images/Gradient.png"
            alt="Travel Monk"
            className="w-[500px] h-[400px] object-cover"
          />
        </div>

        {/* Accordion Section */}
        <div className="w-[600px] h-[400px]">
          <div className="card h-full">
            {/* Fixed height for the accordion with scrollable content */}
            <Accordion
              className="h-full overflow-y-auto"
              activeIndex={0}
            >
              <AccordionTab header="Expertise and Experience">
                <p className="m-0">
                  With years of experience in the travel industry, we have the
                  knowledge and expertise to craft the perfect itinerary
                  tailored to your needs.
                </p>
              </AccordionTab>
              <AccordionTab header="Safety and Reliability">
                <p className="m-0">
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Consectetur, adipisci velit, sed quia non
                  numquam eius modi.
                </p>
              </AccordionTab>
              <AccordionTab header="Unique and Authentic Experiences">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus.
                </p>
              </AccordionTab>
              <AccordionTab header="Comprehensive Travel Packages">
                <p className="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoseTravelMonkSec;
