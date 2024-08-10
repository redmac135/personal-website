<script>
	// using typescript is not supported by mdsvex -- see issue 116

	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {string}
	 */
	export let description = '';

	/**
	 * @type { { [key: string]: string }[] }
	 */
	export let meta = [];

	/**
	 * @type { { [key: string]: [string, string] }[] }
	 */
	export let link = [];

	/**
	 * @type {[string, string]}
	 */
	export let backlink = ['', ''];

	import Article from '$lib/components/Article.svelte';
</script>

<svelte:head>
	<meta name="title" content={title} />
	{#if !!description}
		<meta name="description" content={description} />
	{/if}
	<meta name="author" content="Ethan Zhao" />
	<title>{title}</title>
</svelte:head>

<Article let:Header {backlink}>
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
