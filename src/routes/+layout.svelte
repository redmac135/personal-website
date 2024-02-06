<script lang="ts">
	import '../global.css';
	import Footer from '$lib/components/Footer.svelte';
	import { pageData } from '$lib/stores';

	// vercel web analytics
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />
<Footer background={$pageData.background} />
