<script lang="ts">
	import { onMount } from 'svelte';
	import { pageData } from '$lib/stores';
	import ProjectCards from '$lib/components/ProjectCards.svelte';
	import Title from '$lib/components/Title.svelte';
	import LogoLink from '$lib/components/LogoLink.svelte';

	onMount(() => {
		pageData.set({ background: 'black' });
	});
</script>

<svelte:head>
	<meta name="title" content="Projects" />
	<meta name="description" content="A list of projects worked on and completed by Ethan Zhao" />
	<title>Projects</title>
</svelte:head>

<main>
	<LogoLink />
	<Title>Projects</Title>
	<ProjectCards />
</main>

<style>
	main {
		margin-top: 5rem;
	}
</style>
