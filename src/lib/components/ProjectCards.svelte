<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import personalWebsiteImg from '$lib/assets/projects/personal-website/thumbnail.png';
	import apreptutorsImg from '$lib/assets/projects/apreptutors/thumbnail.png';
	import foursightImg from '$lib/assets/projects/foursight/thumbnail.png';
	import javaparticlesImg from '$lib/assets/projects/java-particle-fields/thumbnail.png';
	import mindfulReflectionsImg from '$lib/assets/projects/mindful-reflections/thumbnail.png';
	import bansheeTrainingImg from '$lib/assets/projects/banshee-training/thumbnail.jpg';

	const projects = [
		{
			imagesrc: apreptutorsImg,
			imagealt: '"Screenshot of aPrepTutors landing page',
			title: 'aPrep Tutors',
			url: 'apreptutors'
		},
		{
			imagesrc: bansheeTrainingImg,
			imagealt: 'Screenshot of Training App Website',
			title: 'Cadet Training App',
			url: 'banshee-training'
		},
		{
			imagesrc: personalWebsiteImg,
			imagealt: 'Screenshot of Personal Website Homepage',
			title: 'Personal Website',
			url: 'personal-website'
		},
		{
			imagesrc: foursightImg,
			imagealt: 'Screenshot of AI cancer detection diagnosis from Foursight website',
			title: 'AI Gene based Cancer Detection',
			url: 'foursight'
		},
		{
			imagesrc: mindfulReflectionsImg,
			imagealt: 'Screenshot of Mindful Reflections Website',
			title: 'Mindful Reflection Journal',
			url: 'mindful-reflections'
		},
		{
			imagesrc: javaparticlesImg,
			imagealt: 'Screenshot of Java Particle Image Animation',
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
