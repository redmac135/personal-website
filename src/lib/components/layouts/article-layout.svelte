<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import type Title from '../Title.svelte';
	import type MetaItem from '../MetaItem.svelte';
	import type MetaLink from '../MetaLink.svelte';

	interface Props {
		title: string;
		description?: string;
		meta?: { [key: string]: string }[];
		link?: { [key: string]: [string, string] }[];
		backlink?: [string, string];
		children?: import('svelte').Snippet;
	}

	let {
		title,
		description = '',
		meta = [],
		link = [],
		backlink = ['', ''],
		children
	}: Props = $props();

	const children_render = $derived(children);
</script>

<svelte:head>
	<meta name="title" content={title} />
	{#if !!description}
		<meta name="description" content={description} />
	{/if}
	<meta name="author" content="Ethan Zhao" />
	<title>{title}</title>
</svelte:head>

<Article {backlink}>
	{#snippet children({ Header })}
		<Header>
			{#snippet children({
				Title: TitleComponent,
				MetaItem: MetaItemComponent,
				MetaLink: MetaLinkComponent
			}: {
				Title: typeof Title;
				MetaItem: typeof MetaItem;
				MetaLink: typeof MetaLink;
			})}
				<TitleComponent>{title}</TitleComponent>
				{#each meta as metaitem}
					<MetaItemComponent item={Object.keys(metaitem)[0]}
						>{Object.values(metaitem)[0]}</MetaItemComponent
					>
				{/each}
				{#each link as metalink}
					<MetaLinkComponent item={Object.keys(metalink)[0]} link={Object.values(metalink)[0]} />
				{/each}
			{/snippet}
		</Header>
		{@render children_render?.()}
	{/snippet}
</Article>
