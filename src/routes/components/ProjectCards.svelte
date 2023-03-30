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
		}
	]
</script>

<div class="center-wrapper">
	<div class="card-wrapper">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</div>

<style lang="postcss">
    .center-wrapper {
        display: flex;
        justify-content: center;
    }

    .card-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        flex-wrap: wrap;
        max-width: 90rem;
        justify-content: center;
    }

    @media (min-width: 768px) {
        .card-wrapper {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>