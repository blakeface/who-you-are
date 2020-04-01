import { useEffect, useState } from "preact/hooks";
import anime from "animejs";

import TitleSvg from "./titleSvg";
import { Fragment } from "preact";

const targets = "svg";
const svgHeight = 150;

export default function TitlePage() {
  const [lineCount, setLineCount] = useState(4);
  useEffect(() => {
    setLineCount(Math.max(Math.ceil(window.outerHeight / svgHeight), 4));
  }, []);
  useEffect(() => {
    // anime({
    //   targets: targets + " path",
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   easing: "easeInOutSine",
    //   duration: 1000,
    //   delay: (_, i) => i * 50,
    //   loop: false
    // });
  }, [lineCount]);

  return (
    <section id="title-page">
      <div class="svg-wrapper">
        {Array.from({ length: lineCount }).map((_, i) => (
          <div class="inline-svg">
            <TitleSvg class={targets} />
            <TitleSvg class={targets} />
          </div>
        ))}
      </div>

      <div class="text-wrapper">
        <h3>Or who you are in the digital world</h3>
        <p>By Blake Netzeband</p>
      </div>
    </section>
  );
}
