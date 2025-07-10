<script lang="ts">
	import Title from './Title.svelte';
	import MetaItem from './MetaItem.svelte';
	import MetaLink from './MetaLink.svelte';
	interface Props {
		children?: import('svelte').Snippet<[any]>;
	}

	let { children }: Props = $props();
</script>

<div class="heading">
	{@render children?.({ Title, MetaItem, MetaLink })}
</div>

<style>
	.heading {
		display: flex;
		flex-direction: column;
		max-width: fit-content;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 2rem;
	}
</style>
