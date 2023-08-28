<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import bansheeTrainingImg from '$lib/assets/images/banshee-training/thumbnail.jpg';

	const projects = [
		{
			imagesrc: bansheeTrainingImg,
			imagealt: 'Screenshot of Training App Website',
			title: 'Cadet Training App',
			url: 'banshee-training'
		},
		{
			imagesrc: bansheeTrainingImg,
			imagealt: 'Screenshot of Training App Website',
			title: 'Personal Website',
			url: 'personal-website'
		},
		{
			imagesrc: bansheeTrainingImg,
			imagealt: 'Screenshot of Training App Website',
			title: 'AI Gene based Cancer Detection',
			url: 'foursight'
		},
		{
			imagesrc: bansheeTrainingImg,
			imagealt: 'Screenshot of Training App Website',
			title: 'Mindful Reflection Journal',
			url: 'mindful-reflections'
		},
		{
			imagesrc: bansheeTrainingImg,
			imagealt: 'Screenshot of Training App Website',
			title: 'Java Particle Simulation',
			url: 'java-particle-fields'
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
