<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Article from '$lib/elements/Article.svelte';
	import ArticleHeader from '$lib/elements/ArticleHeader.svelte';
	import MetaItem from '$lib/elements/MetaItem.svelte';
</script>

<PageTransition>
	<Article>
		<ArticleHeader title="Cadet Training App">
			<MetaItem item="tools">Django/Python, MySQL</MetaItem>
			<MetaItem item="date">Summer of Grade 11</MetaItem>
		</ArticleHeader>

		<p>
			&nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor sit
			amet arcu consequat scelerisque condimentum eget lacus. Duis quis ultrices ligula. Integer
			quis leo eu quam facilisis venenatis. Vivamus dictum, diam non convallis tincidunt, lacus
			felis dapibus erat, vel congue mauris urna vel leo.
		</p>
		<p>
			&nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor sit
			amet arcu consequat scelerisque condimentum eget lacus. Duis quis ultrices ligula. Integer
			quis leo eu quam facilisis venenatis. Vivamus dictum, diam non convallis tincidunt, lacus
			felis dapibus erat, vel congue mauris urna vel leo.
		</p>
	</Article>
</PageTransition>

<style>
	p {
		padding: 1.5rem 1.5rem 0 1.5rem;
	}
</style>
