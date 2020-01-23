import anime from "animejs";

import TitleSvg from "./titleSvg";

export default function TitlePage() {
  return (
    <section id="title-page">
      <div class="svg-wrapper">
        <TitleSvg />
        <TitleSvg />
        <TitleSvg />
        <TitleSvg />
        <TitleSvg />
      </div>

      <h3>Or who you are in the digital world</h3>
      <p>By Blake Netzeband</p>
    </section>
  );
}
