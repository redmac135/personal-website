<script lang="ts">
	import { onMount } from 'svelte';
	import { pageData } from '$lib/stores';
	import Title from '$lib/components/Title.svelte';
	import { WORKSHOP_LIST as workshops } from '../../info';
	import LogoLink from '$lib/components/LogoLink.svelte';

	onMount(() => {
		pageData.set({ background: 'black' });
	});
</script>

<svelte:head>
	<meta name="title" content="Workshops" />
	<meta name="description" content="A list of workshops hosted by by Ethan Zhao" />
	<title>Workshops</title>
</svelte:head>

<main>
	<LogoLink />
	<Title>Workshops</Title>
	<section>
		<ol>
			{#each workshops as workshop}
				<li><a href="/workshops/{workshop.url}">{workshop.title}</a></li>
			{/each}
		</ol>
	</section>
</main>

<style>
	main {
		margin-top: 3rem;
	}

	section {
		display: flex;
		justify-content: center;
		padding-top: 7rem;
		min-height: 90vh;
	}

	li {
		list-style: none;
		font-size: 1.5rem;
		padding: 2rem;
	}

	a {
		border-bottom: 1px transparent solid;
		transition: all 0.3s ease-in-out;
	}

	a:hover {
		border-bottom: 1px white solid;
	}
</style>
