<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	const projects = [
		{
			imagesrc: '/images/bansheeTrainingApp.jpg',
			imagealt: 'Screenshot of Training App Website',
			title: 'Banshee Training App',
			url: 'banshee-training'
		},
		{
			imagesrc: '/images/bansheeTrainingApp.jpg',
			imagealt: 'Screenshot of Training App Website',
			title: 'Banshee Training App',
			url: 'banshee-training'
		},
		{
			imagesrc: '/images/bansheeTrainingApp.jpg',
			imagealt: 'Screenshot of Training App Website',
			title: 'Banshee Training App',
			url: 'banshee-training'
		},
		{
			imagesrc: '/images/bansheeTrainingApp.jpg',
			imagealt: 'Screenshot of Training App Website',
			title: 'Banshee Training App',
			url: 'banshee-training'
		}
	];
</script>

<div class="card-wrapper">
	{#each projects as project}
		<ProjectCard {...project} />
	{/each}
</div>

<style>
	.card-wrapper {
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 0.5rem;
		row-gap: 0.25rem;
		justify-content: center;
		margin-left: 2rem;
		margin-right: 2rem;
	}

	@media (min-width: 900px) {
		.card-wrapper {
			grid-template-columns: 1fr 1fr;
			column-gap: 1rem;
			row-gap: 0.5rem;
			margin-left: 5rem;
			margin-right: 5rem;
		}
	}
</style>
