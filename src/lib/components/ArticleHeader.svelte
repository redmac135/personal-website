<script lang="ts">
	import Title from './Title.svelte';
	import MetaItem from './MetaItem.svelte';
</script>

<div class="heading">
	<slot {Title} {MetaItem} />
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
