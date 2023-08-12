<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import MetaItem from '$lib/components/MetaItem.svelte';
</script>

<Article>
	<ArticleHeader title="Personal Website">
		<MetaItem item="tools">Sveltekit, Blender, Vercel</MetaItem>
		<MetaItem item="published">Aug 10, 2023</MetaItem>
	</ArticleHeader>

	<p />
</Article>

<!-- TODO: Create MetaList Element for "Credits" and "Inspired By" at the bottom of page -->
<style>
	p {
		padding: 1.5rem 1.5rem 0 1.5rem;
	}
</style>
