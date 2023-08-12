<script lang="ts">
	import Article from '$lib/components/Article.svelte';
</script>

<Article let:Header>
	<Header let:Title let:MetaItem>
		<Title>Personal Website</Title>
		<MetaItem item="tools">Sveltekit, Blender, Vercel</MetaItem>
		<MetaItem item="published">Aug 10, 2023</MetaItem>
	</Header>

	<p />
</Article>

<!-- TODO: Create MetaList Element for "Credits" and "Inspired By" at the bottom of page -->
<style>
	p {
		padding: 1.5rem 1.5rem 0 1.5rem;
	}
</style>
