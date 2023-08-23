<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';

	export let data;
</script>

<PageTransition url={data.url}>
	<slot />
</PageTransition>
