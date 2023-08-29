<script lang="ts">
	import ProjectCards from '$lib/components/ProjectCards.svelte';
	import imgtitle from '$lib/assets/homepage/text-thelifeofethanzhao.png';
	import Title from '$lib/components/Title.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	let y = 0;
	let innerHeight: number;
	let innerWidth: number;
	const IMAGE_RATIO = 16 / 9;
	const WINDOW_RATIO = 828 / 500;
	const WINDOW_HORIZONTAL_RATIO = 828 / 1920;
	const WINDOW_VERTICAL_RATIO = 500 / 1080;

	function max(x: number, y: number) {
		if (x > y) {
			return x;
		} else {
			return y;
		}
	}

	function foreground_scale_factor() {
		let windowWidth;
		let windowHeight;
		if (innerWidth / innerHeight < IMAGE_RATIO) {
			windowHeight = innerHeight * WINDOW_VERTICAL_RATIO;
			windowWidth = windowHeight * WINDOW_RATIO;
		} else {
			windowWidth = innerWidth * WINDOW_HORIZONTAL_RATIO;
			windowHeight = windowWidth * (1 / IMAGE_RATIO);
		}

		return max(innerWidth / windowWidth, innerHeight / windowHeight);
	}

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
</script>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />

<PageTransition animateOut={false}>
	<!-- TODO: make animation more 3d like -->
	<!-- TODO: move images into svelte import statements -->
	<main>
		<div id="home" style:opacity={y < 3 * innerHeight ? 1 : 0}>
			<div class="sticky-container">
				<div id="scroll-icon" style:opacity={y < 2 * innerHeight ? 1 : 0}><span /></div>
				<div
					id="darkener"
					style:opacity={interpolate(y, 0.9 * innerHeight, 1.8 * innerHeight, 0, 1)}
				/>
				<div
					id="foreground-image"
					style:transform="scale3d({interpolate(
						y,
						0,
						1 * innerHeight,
						1,
						foreground_scale_factor()
					)},
					{interpolate(y, 0, 1 * innerHeight, 1, foreground_scale_factor())}, 1)"
				/>
				<div
					class="centerer intro-title"
					style:opacity={interpolate(y, 0, 0.5 * innerHeight, 1, 0)}
				>
					<img src={imgtitle} alt="The life of Ethan Zhao" />
				</div>
				<div
					class="centerer about"
					style:opacity={interpolate(y, 0.6 * innerHeight, 0.9 * innerHeight, 0, 1)}
				>
					<div>
						<h1
							class="about-title"
							style="padding-bottom: 2rem;"
							style:opacity={interpolate(y, 1.9 * innerHeight, 2.4 * innerHeight, 1, 0)}
						>
							about
						</h1>
						<p
							class="about-detail"
							style:opacity={interpolate(y, 1.9 * innerHeight, 2.4 * innerHeight, 1, 0)}
							style:transform="translateY({interpolate(
								y,
								0.6 * innerHeight,
								0.9 * innerHeight,
								10,
								0
							)}rem)"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tortor sit amet arcu
							consequat scelerisque condimentum eget lacus. Duis quis ultrices ligula. Integer quis
							leo eu quam facilisis venenatis. Vivamus dictum, diam non convallis tincidunt, lacus
							felis dapibus erat, vel congue mauris urna vel leo. Phasellus mauris massa, fringilla
							vel lorem at, convallis convallis tellus. Sed pulvinar condimentum metus, vel interdum
							nisl commodo quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div
					id="background-image"
					style:transform="scale3d({interpolate(
						y,
						0,
						1 * innerHeight,
						1,
						(foreground_scale_factor() - 1) / 2 + 1
					)},
					{interpolate(y, 0, 1 * innerHeight, 1, (foreground_scale_factor() - 1) / 2 + 1)}, 1)"
				/>
			</div>
		</div>
		<div id="projects">
			<Title>Projects</Title>
			<ProjectCards />
		</div>
	</main>
</PageTransition>

<style>
	main {
		background-color: black;
		overflow-x: clip;
	}

	#home {
		height: 300vh;
	}

	.sticky-container {
		position: sticky;
		top: 0px;
	}

	#scroll-icon span {
		position: absolute;
		top: calc(100vh - 8rem);
		left: 50%;
		width: 50px;
		height: 50px;
		margin-left: -12px;
		border-left: 1px solid #fff;
		border-bottom: 1px solid #fff;
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg);
		-webkit-animation: scrollanimation 1.5s infinite;
		animation: scrollanimation 1.5s infinite;
		box-sizing: border-box;
		z-index: 4;
	}
	@-webkit-keyframes scrollanimation {
		0% {
			-webkit-transform: rotate(-45deg) translate(0, 0);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			-webkit-transform: rotate(-45deg) translate(-20px, 20px);
			opacity: 0;
		}
	}
	@keyframes scrollanimation {
		0% {
			transform: rotate(-45deg) translate(0, 0);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: rotate(-45deg) translate(-20px, 20px);
			opacity: 0;
		}
	}

	#darkener {
		position: absolute;
		z-index: 2;
		width: 100%;
		height: 100vh;
		background-color: var(--background-color);
		background-size: cover;
	}

	#foreground-image {
		position: absolute;
		width: 100%;
		height: 100vh;
		background-image: url('/images/room.png');
		background-position: 50% 50%;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 1;
	}

	#background-image {
		position: absolute;
		width: 100%;
		height: 100vh;
		background-image: url('/images/sunset.png');
		background-position: 50% 50%;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 0;
	}

	.centerer {
		position: absolute;
		width: 100%;
		height: 100vh;
	}

	.centerer > * {
		display: block;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		margin-left: auto;
		margin-right: auto;
	}

	.about {
		text-align: center;
		color: white;
		z-index: 3;
	}

	.about > div {
		max-width: 60vh;
	}

	.about-title {
		text-transform: uppercase;
		z-index: inherit;
	}

	.intro-title {
		z-index: 1;
	}

	.intro-title > img {
		max-width: 60vh;
	}

	#projects {
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 3;
	}
</style>
