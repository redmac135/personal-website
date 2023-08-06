<script lang="ts">
    import ProjectCard from "./ProjectCard.svelte";

    const projects = [
		{
			imagesrc: "/images/bansheeTrainingApp.jpg",
			imagealt: "Screenshot of Training App Website",
			title: "Banshee Training App"
		},
		{
			imagesrc: "/images/bansheeTrainingApp.jpg",
			imagealt: "Screenshot of Training App Website",
			title: "Banshee Training App"
		},
		{
			imagesrc: "/images/bansheeTrainingApp.jpg",
			imagealt: "Screenshot of Training App Website",
			title: "Banshee Training App"
		},
		{
			imagesrc: "/images/bansheeTrainingApp.jpg",
			imagealt: "Screenshot of Training App Website",
			title: "Banshee Training App"
		}
	]
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
		grid-gap: 1rem;
        justify-content: center;
		margin-left: 2rem;
		margin-right: 2rem;
    }

    @media (min-width: 900px) {
        .card-wrapper {
            grid-template-columns: 1fr 1fr;
			grid-gap: 2rem;
			margin-left: 5rem;
			margin-right: 5rem;
        }
    }
</style>