<template>
  <main id="app">
    <TitlePage />
    <Stream />
    <Foo />
  </main>
</template>

<script>
import TitlePage from "./components/TitlePage";
import Stream from "./components/Stream";
import Foo from "./components/Foo";

export default {
  name: "app",
  components: {
    TitlePage,
    Stream,
    Foo
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
