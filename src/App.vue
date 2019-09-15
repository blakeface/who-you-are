<template>
  <main id="app">
    <TitlePage />
    <Part1 />
  </main>
</template>

<script>
import TitlePage from "./components/TitlePage";
import Part1 from "./components/Part1";

export default {
  name: "app",
  components: {
    TitlePage,
    Part1
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
