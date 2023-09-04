<!-- script tag error is caused by mdsvex issue 116 -->
<script lang="ts">
	// adding string type causes dev server to crash, issue on mdsvex
	export let title;
	export let meta = [];
	export let link = [];

	import Article from '$lib/components/Article.svelte';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Article let:Header>
	<Header let:Title let:MetaItem let:MetaLink>
		<Title>{title}</Title>
		{#each meta as metaitem}
			<MetaItem item={Object.keys(metaitem)[0]}>{Object.values(metaitem)[0]}</MetaItem>
		{/each}
		{#each link as metalink}
			<MetaLink item={Object.keys(metalink)[0]} link={Object.values(metalink)[0]} />
		{/each}
	</Header>
	<slot />
</Article>
