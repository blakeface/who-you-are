<template>
	<div id="app">
		<TitlePage />
		<Stream />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitlePage from "./components/TitlePage.vue";
import Stream from "./components/Stream.vue";

@Component({
	components: {
		TitlePage,
		Stream
	}
})
export default class App extends Vue {}
</script>

<style lang="scss">
// global styles :)
body {
	margin: 0;
	padding: 0;
}

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

section {
	min-height: 100vh;
}
</style>
