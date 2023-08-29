<!-- script tag error is caused by mdsvex issue 116 -->
<script lang="ts">
	// adding string type causes dev server to crash, issue on mdsvex
	export let title;
	export let meta = [];

	import Article from '$lib/components/Article.svelte';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Article let:Header>
	<Header let:Title let:MetaItem>
		<Title>{title}</Title>
		{#each meta as metaitem}
			<MetaItem item={Object.keys(metaitem)[0]}>{Object.values(metaitem)[0]}</MetaItem>
		{/each}
	</Header>
	<slot />
</Article>
