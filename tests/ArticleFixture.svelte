<script lang="ts">
	import Article from '../src/lib/components/Article.svelte';
	import ArticleHeader from '../src/lib/components/ArticleHeader.svelte';

	const backlink: [string, string] = ['/projects', 'Projects'];
</script>

<Article {backlink}>
	<ArticleHeader>
		<h1>Representative article</h1>
		<p>Article content</p>
	</ArticleHeader>
</Article>
