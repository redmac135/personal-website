<!-- script tag error is caused by mdsvex issue 116 -->
<script>
	// adding types to these exports causes dev server to crash, issue on mdsvex

	// export let title: string;
	// export let description = '';
	// export let meta: { [key: string]: string }[] = [];
	// export let link: { [key: string]: [string, string] }[] = [];

	//@ts-ignore
	export let title;
	export let description = '';
	//@ts-ignore
	export let meta = [];
	//@ts-ignore
	export let link = [];

	import Article from '$lib/components/Article.svelte';
</script>

<svelte:head>
	<meta name="title" content="{title} Project" />
	{#if !!description}
		<meta name="description" content={description} />
	{/if}
	<meta name="author" content="Ethan Zhao" />
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
