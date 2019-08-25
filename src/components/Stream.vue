<template>
  <section>
    <div class="buffer section" />

    <div class="pool-wrapper section">
      <img src="../assets/pool_bottom.jpg" alt="water refracted on a pool's bottom" />
    </div>

    <div class="text section">
      <p>
        You are not the
        <span>driftwood</span>,
        <span>rapids</span>, or
        <span>mud</span> of the stream.
      </p>
      <p>
        You are the fish
        <span>red</span>,
        <span>smart</span>, and
        <span>lean</span>.
      </p>
      <p>
        You don't get dragged
        <span>down</span>,
        <span>down</span>, and
        <span>under</span> by the incessant force.
      </p>
      <p>
        You swim
        <span>up</span>,
        <span>up</span>, and
        <span>forward</span>. You steer your own course.
      </p>
    </div>
  </section>
</template>

<script >
export default {
  name: "Stream",
  props: {}
};
</script>

<style scoped>
section {
  position: relative;
  background-color: #d4814a;
}

.section {
  position: absolute;
  width: 100%;
  left: 0;
}

.buffer {
  background-color: #e6e5a3;
  height: 30vh;
  top: 0;
}

.text {
  width: calc(100% - 6em);
  padding: 0 3em;
  top: calc(30vh - 4em);
  z-index: 5;
}
p {
  background-color: black;
  color: #e6e5a3;
  margin: 1em;
}

.pool-wrapper {
  top: 30vh;
  max-height: 70vh;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  background-color: #99985d;
}
img {
  height: auto;
  width: 100vw;
  max-width: 800px;
  clip-path: polygon(35% 0%, 65% 0%, 80% 100%, 20% 100%);
}

span {
  color: #b36d6e;
}
</style>
