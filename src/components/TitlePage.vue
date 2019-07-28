<template>
  <section>
    <div>
      <h1>Who You Are</h1>
      <h3>An all-age's story about people and the modern digital world</h3>
      <p>By Blake Netzeband</p>
    </div>
    <canvas id="paper-canvas" resize="true"></canvas>
  </section>
</template>

<script >
import paper from "paper";

export default {
  name: "TitlePage",
  data() {
    return {
      paper: null
    };
  },

  created() {
    // unfortunately need to attach paper to global scope
    paper.install(window);
  },

  mounted() {
    this.paper = paper.setup("paper-canvas");

    const { center, size, bounds } = this.paper.view;
    const { width } = size;
    const height = size.height / 2;

    const points = parseInt(bounds.width / 50);
    const path = new Path();
    path.fillColor = "black";

    // add segments
    for (let i = 0; i <= points; i++) {
      const point = new Point((width / points) * i, center.y);
      path.add(point);
    }

    this.paper.view.onFrame = e => {
      for (let i = 0; i <= points; i++) {
        // A cylic value between -1 and 1
        const sinus = Math.sin(e.time * 3 + i);

        // Change the y position of the segment point:
        path.segments[i].point.y = height - sinus * (height / 10);
      }
    };
    path.smooth();
  }
};
</script>

<style scoped>
section {
  text-align: right;
  background-color: #e0b5b5;
  color: #000;
  min-height: 95vh;
}
div {
  padding: 3rem;
}

canvas {
  height: 70vh;
  width: 110%;
  position: absolute;
  top: 30vh;
  left: -10%;
}
</style>
