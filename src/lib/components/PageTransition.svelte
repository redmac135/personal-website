<script lang="ts">
	import { fly } from 'svelte/transition';
	const pageTransitionDuration = 500;

	export let animateIn = true;
	export let animateOut = true;
</script>

<!-- TODO: figure out layout based page transitions -->
<div
	in:fly={{
		y: -5,
		duration: animateIn ? pageTransitionDuration : 0,
		delay: pageTransitionDuration
	}}
	out:fly={{ y: 5, duration: animateOut ? pageTransitionDuration : 0 }}
>
	<slot />
</div>
