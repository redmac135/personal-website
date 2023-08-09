<script lang="ts">
	import Title from './Title.svelte';

	export let title: string;
</script>

<div class="heading">
	<Title>{title}</Title>
	<slot />
</div>

<style>
	.heading {
		display: flex;
		flex-direction: column;
		max-width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}
</style>
