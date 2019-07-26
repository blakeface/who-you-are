<template>
  <main id="app">
    <Stream />
  </main>
</template>

<script>
import Stream from "./components/Stream.vue";

export default {
  name: "app",
  components: {
    Stream
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
