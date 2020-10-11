<template>
	<div id="app">
		<header class="app-header">
			<Header />
		</header>
		<main class="container">
			<router-view />
		</main>
	</div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
	name: "App",
	components: {
		Header
	}
};
</script>

<style>
#app {
	font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
