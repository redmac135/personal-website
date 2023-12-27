<script lang="ts">
	import '../global.css';
	import Footer from '$lib/components/Footer.svelte';
	import { pageData } from '$lib/stores';
</script>

<slot />
<Footer background={$pageData.background} />
