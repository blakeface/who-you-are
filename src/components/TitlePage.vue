<template>
  <section>
    <h1>Who You Are</h1>
    <h3>An all-age's story about people and the modern digital world</h3>
    <p>By Blake Netzeband</p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TitlePage extends Vue {}
</script>

<style scoped lang="scss">
section {
  text-align: right;
  padding: 3rem;
  background-color: #e0b5b5;
  color: #000;
}
</style>
