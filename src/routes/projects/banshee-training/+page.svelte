<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import MetaItem from '$lib/components/MetaItem.svelte';
</script>

<Article>
	<ArticleHeader title="Cadet Training App">
		<MetaItem item="tools">Django/Python, MySQL</MetaItem>
		<MetaItem item="date">Summer of Grade 11</MetaItem>
	</ArticleHeader>

	<p>
		&nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor sit amet
		arcu consequat scelerisque condimentum eget lacus. Duis quis ultrices ligula. Integer quis leo
		eu quam facilisis venenatis. Vivamus dictum, diam non convallis tincidunt, lacus felis dapibus
		erat, vel congue mauris urna vel leo.
	</p>
	<p>
		&nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor sit amet
		arcu consequat scelerisque condimentum eget lacus. Duis quis ultrices ligula. Integer quis leo
		eu quam facilisis venenatis. Vivamus dictum, diam non convallis tincidunt, lacus felis dapibus
		erat, vel congue mauris urna vel leo.
	</p>
</Article>

<style>
	p {
		padding: 1.5rem 1.5rem 0 1.5rem;
	}
</style>
