<script lang="ts">
	import Header from './ArticleHeader.svelte';
</script>

<main>
	<slot {Header} />
</main>

<style>
	main {
		margin-top: 1.5rem;
		padding: 1.5rem;
	}

	@media (min-width: 900px) {
		main {
			max-width: 60vw;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
