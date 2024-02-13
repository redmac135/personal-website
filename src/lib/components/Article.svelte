<script lang="ts">
	import { onMount } from 'svelte';
	import { pageData } from '$lib/stores';
	import './github-markdown-dark.css';
	import Header from './ArticleHeader.svelte';

	export let backlink: [string, string] | [] = [];

	onMount(() => {
		pageData.set({ background: '#0d1117' });
		console.log(backlink);
	});
</script>

<main class="markdown-body">
	<div class="centerer">
		<!-- this comparison is required as mdsvex returns [] if property is not defined -->
		{#if backlink[1] !== '' && backlink.length == 2}
			<nav><a href={backlink[0]}>&lt; {backlink[1]}</a></nav>
		{/if}
		<slot {Header} />
	</div>
</main>

<style>
	main {
		padding-top: 4rem;
		min-width: 100%;
		min-height: 100%;
	}

	nav {
		position: absolute;
		top: 1rem;
		display: flex;
		justify-content: left;
	}

	.centerer {
		max-width: 60ch;
		padding-left: 3rem;
		padding-right: 3rem;
		margin: auto;
	}

	.markdown-body {
		color-scheme: dark;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		margin: 0;
		color: #c9d1d9;
		background-color: #0d1117;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial,
			sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
		font-size: 1.25rem;
		line-height: 1.5;
		word-wrap: break-word;
		min-height: 100%;
		padding-bottom: 5rem;
	}
</style>
