<script lang="ts">
	import Article from '$lib/components/Article.svelte';
</script>

<Article let:Header>
	<Header let:Title let:MetaItem>
		<Title>Mindful Reflection Journal</Title>
	</Header>
</Article>
