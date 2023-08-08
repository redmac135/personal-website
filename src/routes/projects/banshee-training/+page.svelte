<script lang="ts">
	import Article from '$lib/elements/Article.svelte';
	import Title from '$lib/elements/Title.svelte';
	import Meta from '$lib/elements/Meta.svelte';
</script>

<Article>
	<div class="heading">
		<Title>Cadet Training App</Title>
		<Meta item="tools">Django/Python, MySQL</Meta>
		<Meta item="date">Summer of Grade 11</Meta>
	</div>

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
	.heading {
		display: flex;
		flex-direction: column;
		max-width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}

	p {
		padding: 1.5rem 1.5rem 0 1.5rem;
	}
</style>
