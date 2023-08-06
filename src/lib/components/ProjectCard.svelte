<script lang="ts">
	export let imagesrc: string;
	export let imagealt: string;
	export let title: string;
</script>

<div class="wrapper">
	<img class="image" src={imagesrc} alt={imagealt} />
	<div class="title">{title}</div>
	<div class="fade" />
</div>

<style>
	.wrapper {
		position: relative;
		max-width: 100%;
		display: block;
		margin: 1rem;
		border-radius: 0.5rem;
		border-width: 2px;
		border-color: gray;
		overflow: hidden;
	}

	.image {
		display: block;
		max-width: 100%;
		height: auto;
	}

	.title {
		position: absolute;
		bottom: 0.25rem;
		right: 1rem;
		z-index: 3;
		font-weight: 600;
	}

	.fade {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 200px;
		z-index: 2;
		background: rgba(255, 255, 255, 0)
			linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 80%) repeat
			scroll 0 0;
		border-radius: 0.375rem;
		transition: background 0.3s;
	}
</style>
