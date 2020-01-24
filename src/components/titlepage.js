import { useEffect } from "preact/hooks";
import anime from "animejs";

import TitleSvg from "./titleSvg";

const targets = "svg";

export default function TitlePage() {
  useEffect(() => {
    anime({
      targets,
      translateX: 500,
      loop: true,
      delay: anime.stagger(500, { easing: "easeOutQuad" }),
      direction: "alternate"
    });
  }, []);

  return (
    <section id="title-page">
      <div class="svg-wrapper">
        {Array.from({ length: 5 }).map(_ => (
          <TitleSvg class={targets} />
        ))}
      </div>

      <h3>Or who you are in the digital world</h3>
      <p>By Blake Netzeband</p>
    </section>
  );
}
