<script lang="ts">
	const INTRO_SCROLL_LENGTH = 1500;
	const FADE_SCROLL_LENGTH = 800;
	let y: number;
	function clamp(input: number, min: number, max: number) {
		return Math.min(Math.max(input, min), max);
	}
	const elementScrollY = (e) => {
		if (!e.target.scrollTop) {
			return;
		}
		y = e.target.scrollTop;
		console.log(e.target.scrollTop);
	};
</script>

<svelte:window bind:scrollY={y} />

<section
	class="wrapper scroll-lock"
	on:scroll|preventDefault={elementScrollY}
	style="margin-top: {y}px;"
>
	<div class="debug-stats">{y}</div>
	<div
		class="intro-darkener"
		style="opacity: {100 * clamp((y - INTRO_SCROLL_LENGTH) / FADE_SCROLL_LENGTH, 0, 1)}%;"
	/>
	<div
		class="intro-foreground"
		style="transform: scale3d(
			{clamp((0.7 * y) / INTRO_SCROLL_LENGTH + 1, 1, 1.7)}, 
			{clamp((0.7 * y) / INTRO_SCROLL_LENGTH + 1, 1, 1.7)}, 
			1);"
	/>
	<div
		class="intro-background"
		style="transform: scale3d(
			{clamp((0.3 * y) / INTRO_SCROLL_LENGTH + 1, 1, 1.3)}, 
			{clamp((0.3 * y) / INTRO_SCROLL_LENGTH + 1, 1, 1.3)}, 
			1);"
	/>
</section>

<style lang="postcss">
	.wrapper {
		position: relative;
	}

	.debug-stats {
		position: absolute;
		top: 10px;
		left: 10px;
		z-index: 5;
	}

	.intro-background {
		width: 100%;
		height: 100vh;
		background-image: url('/images/sunset.png');
		background-position: 50% 50%;
		background-size: cover;
		background-repeat: no-repeat;
		will-change: transform;
		transform-style: preserve-3d;
	}

	.intro-foreground {
		position: absolute;
		top: 0px;
		z-index: 1;
		overflow: visible;
		width: 100%;
		height: 110vh;
		background-image: url('/images/room.png');
		background-position: 50% 50%;
		background-size: cover;
		background-repeat: no-repeat;
		will-change: transform;
		transform-style: preserve-3d;
	}

	.intro-darkener {
		position: absolute;
		z-index: 3;
		width: 100%;
		height: 100vh;
		background-color: #000;
	}

	.scroll-lock {
		overflow-y: visible;
		overflow-x: hidden;
	}
</style>
