<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import ProjectCards from '$lib/components/ProjectCards.svelte';
	import Title from '$lib/elements/Title.svelte';
</script>

<PageTransition>
	<main>
		<Title>Projects</Title>
		<ProjectCards />
	</main>
</PageTransition>

<style>
	main {
		margin-top: 3rem;
	}
</style>
