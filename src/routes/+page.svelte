<script lang="ts">
	import ProjectCards from '$lib/components/ProjectCards.svelte';
	import imgtitle from '$lib/assets/homepage/text-thelifeofethanzhao.png';
	import Title from '$lib/components/Title.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import '$lib/assets/css/fontawesome.min.css';

	let y = 0;
	let innerHeight: number;
	let innerWidth: number;
	const IMAGE_RATIO = 16 / 9;
	const WINDOW_RATIO = 828 / 500;
	const WINDOW_HORIZONTAL_RATIO = 828 / 1920;
	const WINDOW_VERTICAL_RATIO = 500 / 1080;

	const SOCIAL_LINKS = {
		RESUME: '/ethan_zhao_2023.pdf',
		EMAIL: 'ethanzhao1981@gmail.com',
		PHONE: '6475224188',
		GITHUB: 'https://github.com/redmac135',
		LINKEDIN: 'https://www.linkedin.com/in/ethan-zhao-731a821b7/'
	};

	function max(x: number, y: number) {
		if (x > y) {
			return x;
		} else {
			return y;
		}
	}

	function foreground_scale_factor(): number {
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

	function calculate_window_width(innerWidth: number, innerHeight: number): number {
		if (innerWidth / innerHeight < IMAGE_RATIO) {
			return innerHeight * WINDOW_VERTICAL_RATIO * WINDOW_RATIO;
		} else {
			return innerWidth * WINDOW_HORIZONTAL_RATIO;
		}
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

<svelte:head>
	<!-- fonts for social icons -->
	<meta name="title" content="Ethan Zhao" />
	<meta
		name="description"
		content="A personal portfoilo website coded by Ethan Zhao which showcases his past projects."
	/>
	<title>Ethan Zhao</title>
</svelte:head>

<PageTransition animateOut={false}>
	<!-- TODO: make animation more 3d like -->
	<!-- TODO: move images into svelte import statements -->
	<main>
		<!-- home opacity animation is redundant -->
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
					style:opacity={y < 1.8 * innerHeight ? 1 : 0}
				/>
				<div
					class="centerer intro-title"
					style:opacity={interpolate(y, 0, 0.5 * innerHeight, 1, 0)}
				>
					<img
						src={imgtitle}
						style="--window-width: {calculate_window_width(innerWidth, innerHeight)}px"
						alt="The life of Ethan Zhao"
					/>
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
							Ethan is a passion driven Engineering student studying at Western University and
							persuing a Software Engineering and Ivey HBA double degree. He's works with numerous
							groups from science fair teams of 4 people to squadron wide applications serving over
							200 people. With each project, Ethan expands his skillset, striving to learn new
							skills each time while maintaining a high level of impact with each release. He hopes
							he can continue his journey of growth and teamwork by working on larger and more
							influential projects.
						</p>
						<div
							class="about-links-container"
							style:opacity={interpolate(y, 1.9 * innerHeight, 2.4 * innerHeight, 1, 0)}
							style:transform="translateY({interpolate(
								y,
								0.6 * innerHeight,
								0.9 * innerHeight,
								10,
								0
							)}rem)"
						>
							<div class="social-links">
								<a
									href="mailto:ethanzhao1981@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
									class="social-button"
									style="--color: #F90101"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										height="1em"
										viewBox="0 0 512 512"
										fill="white"
										><path
											d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
										/></svg
									></a
								>
								<a
									href="https://github.com/redmac135"
									target="_blank"
									rel="noopener noreferrer"
									class="social-button"
									style="--color: #6e5494"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										height="1em"
										viewBox="0 0 496 512"
										fill="white"
										><path
											d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
										/></svg
									></a
								>
								<!-- for small screen -->
								<a
									href={SOCIAL_LINKS.RESUME}
									target="_blank"
									rel="noopener noreferrer"
									class="wide-screen fancy-button">Resume</a
								>
								<a
									href="tel:6475224188"
									target="_blank"
									rel="noopener noreferrer"
									class="social-button"
									style="--color: #6cc644"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										height="1em"
										viewBox="0 0 512 512"
										fill="white"
										><path
											d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
										/></svg
									></a
								>
								<a
									href="https://www.linkedin.com/in/ethan-zhao-731a821b7/"
									target="_blank"
									rel="noopener noreferrer"
									class="social-button"
									style="--color: #0072b1"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 30 30"
										height="1em"
										fill="white"
									>
										<path
											d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
										/></svg
									></a
								>
							</div>
							<!-- for wide screen -->
							<a
								href={SOCIAL_LINKS.RESUME}
								target="_blank"
								rel="noopener noreferrer"
								class="small-screen fancy-button">Resume</a
							>
						</div>
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
					style:opacity={y < 1.8 * innerHeight ? 1 : 0}
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
		margin-left: -25px;
		border-left: 1px solid #fff;
		border-bottom: 1px solid #fff;
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg);
		-webkit-animation: scrollanimation 1.5s infinite;
		animation: scrollanimation 1.5s infinite;
		box-sizing: border-box;
		z-index: 4;
	}

	/* Social Icon Manager */
	.about-links-container {
		display: inline-block;
		text-decoration: none;
		margin-top: 0.5rem;
		color: white;
	}

	.social-button {
		padding: 0.5rem;
		display: inline-block;
		cursor: pointer;
		border: 3px solid var(--color);
		border-radius: 0.25rem;
		background-color: transparent;
		transition: background-color 250ms;
		margin-bottom: 0.5rem;
	}

	.social-button:hover,
	.social-button:focus-visible {
		background-color: var(--color);
	}

	.fancy-button {
		--color: hsl(213, 38%, 22%);
		padding: 0.5rem 1rem;
		display: inline-block;
		cursor: pointer;
		border: 3px solid var(--color);
		border-radius: 0.25rem;

		position: relative;
		isolation: isolate;
	}

	.fancy-button::after {
		content: '';
		position: absolute;
		z-index: -1;
		background: var(--color);
		inset: 0;

		scale: 0 1;
		transform-origin: right;
		transition: scale 450ms;
	}

	.fancy-button:hover::after,
	.fancy-button:focus-visible::after {
		transform-origin: left;
		scale: 1 1;
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
		background-image: url('/images/room.webp');
		background-position: 50% 50%;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: 1;
	}

	#background-image {
		position: absolute;
		width: 100%;
		height: 100vh;
		background-image: url('/images/sunset.webp');
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
		width: 85vw;
		max-width: 30rem;
	}

	.about-title {
		text-transform: uppercase;
		z-index: inherit;
	}

	.intro-title {
		z-index: 1;
	}

	.intro-title > img {
		width: calc(var(--window-width) * 0.95);
		max-width: 95vw;
		max-height: 95vh;
	}

	#projects {
		display: flex;
		padding-top: 3rem;
		flex-direction: column;
		justify-content: center;
		z-index: 3;
	}

	.wide-screen {
		display: none;
	}

	@media (min-width: 600px) {
		.wide-screen {
			display: inline-block;
		}

		.small-screen {
			display: none;
		}
	}
</style>
