<template>
  <main id="app">
    <TitlePage />
    <Stream />
  </main>
</template>

<script>
import TitlePage from "./components/TitlePage.vue";
import Stream from "./components/Stream.vue";

export default {
  name: "app",
  components: {
    TitlePage,
    Stream
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
