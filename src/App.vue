<template>
	<div id="app">
		<header class="app-header">
			<Header />
		</header>
		<main class="container">
			<router-view />
		</main>
		<footer class = "app-footer">
			<Footer />
		</footer>
	</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		Header,
		Footer
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
