<script lang="ts">
	import './github-markdown-dark.css';
	import Header from './ArticleHeader.svelte';
</script>

<main class="markdown-body">
	<div class="centerer">
		<nav><a href="/?scrollto=projects">&lt; Projects</a></nav>
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
		height: 100%;
		padding-bottom: 5rem;
	}
</style>
