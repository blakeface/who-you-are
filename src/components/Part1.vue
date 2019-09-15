<template>
  <section>
    <p>If you rolled-up all the likes, interests, thoughts, and loves of any given person</p>
    <p>
      <span class="shape">you'd most likely get something like this</span>
    </p>
    <p>
      <span class="shape">Or this</span>
    </p>
    <p>
      <span class="shape">Or this</span>
    </p>
    <p>
      <span class="shape">Or this</span>
    </p>
    <canvas id="part1-canvas" resize="true" ref="part1-canvas"></canvas>
  </section>
</template>

<script >
import paper from "paper";

export default {
  name: "TitlePage",
  data() {
    return {
      paper: null,
      yOffset: 0,
      shapes: []
    };
  },

  methods: {
    getRandomColor: function() {
      return ("00000" + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(
        -6
      );
    }
  },

  mounted() {
    // instantiated paper
    this.paper = paper.setup("part1-canvas");
    // get offsetHeight
    const { y: yOffset } = this.$refs["part1-canvas"].getBoundingClientRect();
    this.yOffset = yOffset;

    // draw first shapes
    const elements = document.querySelectorAll(".shape");
    [...elements].forEach((el, i) => {
      const { right: x, top: y } = el.getBoundingClientRect();

      const shape = new this.paper.Shape.Circle(
        new this.paper.Point(x, y - this.yOffset),
        15
      );
      shape.strokeColor = this.getRandomColor();
      this.shapes[i] = shape;
    });
  }
};
</script>

<style scoped>
section {
  position: relative;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
