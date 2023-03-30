<script lang="ts">
	import ThemeToggle from './components/ThemeToggleButton.svelte';
	import { darkMode } from './stores/stores';

	import WelcomePage from './pages/WelcomePage.svelte';
	import ProjectCards from './components/ProjectCards.svelte';

	// color mode control
	let menu = 1;

	$: logo = $darkMode === false ? '/images/blacklogo.png' : '/images/whitelogo.png';

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

<header class="flex flex-col sm:flex-row items-center m-3">
	<a href="/">
		<img src={logo} class="mr-3 h-16 min-w-max" alt="Personal Logo" />
	</a>
	<div class="hidden sm:block text-3xl">Ethan Zhao</div>
	<nav class="flex justify-center sm:ml-auto">
		<a href="/" on:click|preventDefault={() => (menu = 1)} class="ml-6 text-2xl inline">Work</a>
		<a href="/" on:click|preventDefault={() => (menu = 2)} class="ml-6 text-2xl inline">About</a>
		<a href="/" class="ml-6 text-2xl inline">Resume</a>
	</nav>
	<div class="sm:ml-6 pt-2">
		<ThemeToggle />
	</div>
</header>

<WelcomePage />

<div class="spacer" />

<ProjectCards />

<style lang="postcss">
	.spacer {
		height: 16rem;
	}
</style>
