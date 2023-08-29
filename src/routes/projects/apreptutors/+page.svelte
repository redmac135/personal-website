<script lang="ts">
	import Article from '$lib/components/Article.svelte';
</script>

<Article let:Header>
	<Header let:Title let:MetaItem>
		<Title>aPrep Tutors</Title>
		<MetaItem item="tools">Svelte, Firebase, goDaddy</MetaItem>
		<MetaItem item="date">Summer before University</MetaItem>
	</Header>

	<!-- IB -> international blac... -->
	<p>
		&nbsp; &nbsp; After graduating from the IB program, me and three other graduates decided to
		begin a tutoring firm targeted towards those persuing the same diploma that we had accomplished.
		This firm would connect IB graduates who are willing to share their experience, mistakes,
		advice, and knowledge with those currently in or about to enter the program.
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
