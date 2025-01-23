import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import Button from "@mui/material/Button";
import AnimatedImageTabs from "../AnimatedTabs/AnimatedTabs";

function ChoseTravelMonkSec() {
  return (
    <div className="bg-white">
      <h1 className="text-black font-bold mx-auto text-center text-3xl">
        Why Choose Travel Monk?
      </h1>

      <AnimatedImageTabs />
    </div>
  );
}

export default ChoseTravelMonkSec;
