<script lang="ts">
	import '../global.css';
	import Footer from '$lib/components/Footer.svelte';
	import { pageData } from '$lib/stores';

	// vercel web analytics
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });

	// cross-fade transition
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		// document.startViewTransition type is granted by @types/dom-view-transitions
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<slot />
<Footer background={$pageData.background} />
