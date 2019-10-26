<template>
  <section class="part-1">
    <p>If you rolled-up all the likes, interests, thoughts, and loves of any given person</p>
    <section class="shapes-wrapper">
      <p>
        <span
          class="shape"
          data-shape="circle"
          ref="shape-circle"
        >you'd most likely get something like this</span>
      </p>
      <p>
        <span class="shape" data-shape="triangle" ref="shape-triangle">Or this</span>
      </p>
      <p>
        <span class="shape" data-shape="square" ref="shape-square">Or this</span>
      </p>
      <p>
        <span class="shape" data-shape="hexagon" ref="shape-hexagon">Or this</span>
      </p>
    </section>

    <section>
      <p>
        <span
          class="shape"
          data-shape="final"
          ref="shape-final"
        >But realistically, you'd end up with something like this</span>
      </p>
    </section>

    <p class="help">(Have fun. Click Around.)</p>
    <canvas id="part1-canvas" resize="true" ref="part1-canvas"></canvas>
  </section>
</template>

<script >
import paper from "paper";
import { filter } from "lodash";

export default {
  name: "Part1",
  data() {
    return {
      paper: null,
      yOffset: 0,
      shapes: []
    };
  },

  methods: {
    getRandomHex: function() {
      return ("00000" + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(
        -6
      );
    },

    randomizeParagraphAlignment: function() {
      const paragraphs = document.querySelectorAll("p");
      [...paragraphs].forEach((el, i, arr) => {
        if (i !== arr.length - 1) {
          const random = Math.random() * 3;
          const align = random < 1 ? "left" : random > 2 ? "right" : "center";
          return el.setAttribute("style", `text-align:${align};`);
        }
      });
    },

    drawShapes: function() {
      const elements = filter(this.$refs, (el, key) => {
        return key.includes("shape-") ? true : false;
      });

      elements.forEach((el, i) => {
        // draw shape
        const { right: x, top: y } = el.getBoundingClientRect();
        const type = el.dataset.shape;

        const shape = this.getShape(type, x, y);
        this.shapes[i] = shape;
      });
    },

    getShape: function(type, x, y) {
      const radius = 50;
      // compensate for font and screen position
      y = y + 15 - this.yOffset;
      x = x + radius * 1.5;

      const center = new this.paper.Point(x, y);
      const fillColor = `#${this.getRandomHex()}`;

      if (type === "circle") {
        return new this.paper.Path.Circle({
          center,
          radius,
          fillColor
        });
      }

      let sides = 0;
      switch (type) {
        case "hexagon":
          sides = 6;
          break;
        case "triangle":
          sides = 3;
          break;
        case "square":
          sides = 4;
          break;
      }

      return new this.paper.Path.RegularPolygon({
        center,
        sides,
        radius,
        fillColor
      });
    },

    handleSectionClick: function() {
      this.randomizeParagraphAlignment();
      this.shapes.forEach(shape => shape.remove());
      this.drawShapes();
    }
  },

  mounted() {
    // instantiated paper
    this.paper = paper.setup("part1-canvas");
    // get offsetHeight
    const { y: yOffset } = this.$refs["part1-canvas"].getBoundingClientRect();
    this.yOffset = yOffset;

    // randomize paragraph alignment
    this.randomizeParagraphAlignment();

    // add click events
    this.$refs["part1-canvas"].addEventListener(
      "click",
      this.handleSectionClick
    );

    // draw first shapes
    this.drawShapes();
  }
};
</script>

<style scoped>
.part-1 {
  position: relative;
  /* helps calculate positions */
  min-height: 100vh;
  background: rgb(182, 224, 194);
  background: linear-gradient(
    320deg,
    rgba(205, 204, 226, 1) 0%,
    rgba(182, 224, 194, 1) 100%
  );
  padding: 1rem;
}
.part-1:hover {
  cursor: pointer;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

p {
  font-size: 1rem;
  padding: 50px 0;
  margin: 0;
}

.shapes-wrapper {
  max-width: calc(100% - 150px);
}

.help {
  font-size: 0.75rem;
  text-align: center;
  padding: 1rem;
  margin: 0;
}
</style>
