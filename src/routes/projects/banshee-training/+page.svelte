<script lang="ts">
	import Article from '$lib/components/Article.svelte';
</script>

<Article let:Header>
	<Header let:Title let:MetaItem>
		<Title>Cadet Training App</Title>
		<MetaItem item="tools">Django/Python, MySQL</MetaItem>
		<MetaItem item="date">Summer of Grade 11</MetaItem>
	</Header>

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
