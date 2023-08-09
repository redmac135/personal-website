<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Article from '$lib/elements/Article.svelte';
	import ArticleHeader from '$lib/elements/ArticleHeader.svelte';
	import MetaItem from '$lib/elements/MetaItem.svelte';
</script>

<PageTransition>
	<Article>
		<ArticleHeader title="Personal Website">
			<MetaItem item="tools">Sveltekit, Blender, Vercel</MetaItem>
			<MetaItem item="published">Aug 10, 2023</MetaItem>
		</ArticleHeader>

		<p />
	</Article>
</PageTransition>

<!-- TODO: Create MetaList Element for "Credits" and "Inspired By" at the bottom of page -->
<style>
	p {
		padding: 1.5rem 1.5rem 0 1.5rem;
	}
</style>
