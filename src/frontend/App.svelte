<script lang="ts">
	import ToolbarPane from "./components/UIPanes/ToolbarPane.svelte";
	import LayersPane from "./components/UIPanes/LayersPane.svelte";
	import PropertiesPane from "./components/UIPanes/PropertiesPane.svelte";
	import Footer from "./components/Footer.svelte";
	import WorkspacePane from "./components/UIPanes/WorkspacePane.svelte";
</script>

<style>
	#app-main {
		width: 100vw;
		height: 100vh;

		display: grid;
		grid-template-columns: 40px 100fr 300px;
		grid-template-rows: 50fr 50fr 20px;
	}
</style>

<div id="app-main">
	<ToolbarPane />
	<LayersPane />
	<PropertiesPane />
	<WorkspacePane />

	<Footer />
</div>