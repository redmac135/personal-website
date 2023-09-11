<script lang="ts">
	export let image: string;
	export let imagealt: string;
</script>

<section>
	<img src={image} alt={imagealt} class="image" />
</section>

<style>
	section {
		display: flex;
		justify-content: center;
	}

	.image {
		display: block;
		max-width: 90%;
		height: auto;
		border-radius: 0.25rem;
		margin-bottom: 1.5rem;
		box-shadow: 0.25rem;
	}
</style>
