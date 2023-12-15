<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';

	// vercel web analytics
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	export let data;
</script>

<PageTransition url={data.url}>
	<slot />
</PageTransition>
