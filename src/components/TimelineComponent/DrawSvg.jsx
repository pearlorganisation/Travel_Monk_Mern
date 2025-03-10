import { useEffect, useRef } from "react";
import Vector from "../../assets/Vector";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DrawSvg = () => {
  const ref = useRef(null);
  const ballRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let element = ref.current;
    let svg = document.getElementsByClassName("svg-path")[0];

    const length = svg.getTotalLength();

    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          const draw = length * self.progress;
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: (self) => {
          if (self.isActive) {
            console.log("Scrolling is active");
            ballRef.current.style.display = "none";
          } else {
            console.log("Scrolling not active");
            ballRef.current.style.display = "inline-block";
          }
        },
      },
    });

    console.log(length);

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <>
      <div
        ref={ballRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full 
        animate-[bounce_0.5s_linear_infinite_alternate]"
      ></div>

      <div
        ref={ref}
        className="absolute top-2 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden"
      >
        <Vector className="w-full h-full stroke-black stroke-[2]" />
      </div>
    </>
  );
};

export default DrawSvg;
