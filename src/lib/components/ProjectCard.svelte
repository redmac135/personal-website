<script lang="ts">
	export let imagesrc: string;
	export let imagealt: string;
	export let title: string;
</script>

<div class="wrapper">
	<img class="image" src={imagesrc} alt={imagealt} />
	<div class="title">{title}</div>
</div>

<style>
	.wrapper {
		position: relative;
		max-width: 100%;
		display: block;
		margin: 1rem;
		overflow: hidden;
	}

	.image {
		display: block;
		max-width: 100%;
		height: auto;
		border-radius: 0.5rem;
		border: 0.25rem gray solid;
		margin-bottom: 0.4rem;
	}

	.title {
		text-align: right;
		font-size: 1.5rem;
		font-weight: 400;
	}
</style>
