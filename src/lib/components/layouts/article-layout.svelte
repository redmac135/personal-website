<!-- script tag error is caused by mdsvex issue 116 -->
<script lang="ts">
	import './github-markdown-dark.css';
	// adding string type causes dev server to crash, issue on mdsvex
	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main class="markdown-body">
	<div class="centerer">
		<h1>{title}</h1>
		<slot />
	</div>
</main>

<style>
	main {
		padding-top: 10rem;
		min-width: 100vh;
		min-height: 100vh;
	}

	.centerer {
		max-width: 60ch;
		margin: auto;
	}
</style>
