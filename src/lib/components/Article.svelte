<script lang="ts">
	import './github-markdown-dark.css';
	import Header from './ArticleHeader.svelte';
</script>

<main class="markdown-body">
	<div class="centerer">
		<slot {Header} />
	</div>
</main>

<style>
	main {
		padding-top: 5rem;
		min-width: 100vh;
		min-height: 100vh;
	}

	.centerer {
		max-width: 60ch;
		margin: auto;
	}
</style>
