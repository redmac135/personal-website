<script lang="ts">
	let y = 0;
	let innerHeight: number;

	function interpolate(
		y: number,
		startY: number,
		endY: number,
		startValue: number,
		endValue: number
	) {
		const diffY = endY - startY;
		const diffValue = endValue - startValue;
		if (y < startY) {
			return startValue;
		} else if (startY <= y && y <= endY) {
			const progress = (y - startY) / diffY;
			return startValue + diffValue * progress;
		} else if (endY < y) {
			return endValue;
		}
	}

	// project cards
	const projects = [
		{
			imagesrc: '/images/bansheeTrainingApp.jpg',
			imagealt: 'Screenshot of Training App Website',
			title: 'Banshee Training App'
		},
		{
			imagesrc: '/images/bansheeTrainingApp.jpg',
			imagealt: 'Screenshot of Training App Website',
			title: 'Banshee Training App'
		},
		{
			imagesrc: '/images/bansheeTrainingApp.jpg',
			imagealt: 'Screenshot of Training App Website',
			title: 'Banshee Training App'
		}
	];
</script>

<svelte:window bind:scrollY={y} bind:innerHeight />

<!-- TODO: make animation more 3d like -->
<!-- TODO: make these things disappear when not in view -->
<main>
	<div id="home">
		<div id="darkener" style:opacity={interpolate(y, 0.7 * innerHeight, 1.8 * innerHeight, 0, 1)}></div>
		<div
			id="foreground-image"
			style:transform="scale3d({interpolate(y, 0, 1 * innerHeight, 1, 2)},
			{interpolate(y, 0, 1 * innerHeight, 1, 2)}, 1)"
		/>
		<div
			id="background-image"
			style:transform="scale3d({interpolate(y, 0, 1 * innerHeight, 1, 1.5)},
			{interpolate(y, 0, 1 * innerHeight, 1, 1.5)}, 1)"
		/>
	</div>
	<div id="about">THIS IS AN ABOUT ME</div>
</main>

<style>
	main {
		height: 500vh;
		background-color: black;
	}

	#home {
		height: 260vh;
	}

	#darkener {
		position: fixed;
		z-index: 2;
		width: 100%;
		height: 100vh;
		background-color: black;
		background-size: cover;
	}

	#foreground-image {
		position: fixed;
		width: 100%;
		height: 100vh;
		background-image: url('/images/room.png');
		background-position: 50% 50%;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 1;
	}

	#background-image {
		position: fixed;
		width: 100%;
		height: 100vh;
		background-image: url('/images/sunset.png');
		background-position: 50% 50%;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 0;
	}

	#about {
		border-top: 5px white solid;
		position: relative;
		z-index: 3;
	}
</style>
