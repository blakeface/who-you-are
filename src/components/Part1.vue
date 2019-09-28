<template>
  <section class="part-1">
    <p>If you rolled-up all the likes, interests, thoughts, and loves of any given person</p>
    <div class="shapes-wrapper">
      <p>
        <span class="shape" data-shape="circle">you'd most likely get something like this</span>
      </p>
      <p>
        <span class="shape" data-shape="triangle">Or this</span>
      </p>
      <p>
        <span class="shape" data-shape="square">Or this</span>
      </p>
      <p>
        <span class="shape" data-shape="hexagon">Or this</span>
      </p>
    </div>
    <canvas id="part1-canvas" resize="true" ref="part1-canvas"></canvas>
  </section>
</template>

<script >
import paper from "paper";

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
      [...paragraphs].forEach(el => {
        const random = Math.random() * 3;
        const align = random < 1 ? "left" : random > 2 ? "right" : "center";
        return el.setAttribute("style", `text-align:${align};`);
      });
    },

    drawShapes: function() {
      const elements = document.querySelectorAll(".shape");
      [...elements].forEach((el, i) => {
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
      let sides = 0;

      if (type === "circle") {
        return new this.paper.Path.Circle({
          center,
          radius,
          fillColor
        });
      }

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
    const section = document.querySelector(".part-1");
    section.addEventListener("click", this.handleSectionClick);

    // draw first shapes
    this.drawShapes();
  }
};
</script>

<style scoped>
section {
  position: relative;
  min-height: 100vh;
  background-color: #b6e0c2;
  padding: 1rem;
}
section:hover {
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
  font-size: 20px;
  padding: 50px 0;
  margin: 0;
}

.shapes-wrapper {
  max-width: calc(100% - 150px);
}
</style>
