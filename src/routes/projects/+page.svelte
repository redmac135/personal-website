<script lang="ts">
	import ProjectCards from '$lib/components/ProjectCards.svelte';
	import Title from '$lib/components/Title.svelte';
</script>

<svelte:head>
	<meta name="title" content="Projects" />
	<meta name="description" content="A list of projects worked on and completed by Ethan Zhao" />
	<title>Projects</title>
</svelte:head>

<main>
	<Title>Projects</Title>
	<ProjectCards />
</main>

<style>
	main {
		margin-top: 3rem;
	}
</style>
