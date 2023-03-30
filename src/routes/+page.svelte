<script lang="ts">
	import Navbar from './components/Navbar.svelte';

	import WelcomePage from './pages/WelcomePage.svelte';
	import ProjectCards from './components/ProjectCards.svelte';

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

<Navbar />

<WelcomePage />

<div class="spacer" />

<ProjectCards />

<style lang="postcss">
	.spacer {
		height: 16rem;
	}
</style>
