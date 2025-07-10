<script lang="ts">
	interface Props {
		image: string;
		imagealt: string;
	}

	let { image, imagealt }: Props = $props();
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
		max-width: 100%;
		height: auto;
		border-radius: 0.25rem;
		margin-bottom: 1.5rem;
		box-shadow: 0.25rem;
	}
</style>
