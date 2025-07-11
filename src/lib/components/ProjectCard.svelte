<script lang="ts">
	interface Props {
		imagesrc: string;
		imagealt: string;
		title: string;
		url: string;
	}

	let { imagesrc, imagealt, title, url }: Props = $props();
</script>

<a class="wrapper" href="/projects/{url}">
	<img class="image" src={imagesrc} alt={imagealt} />
	<div class="title">{title}</div>
</a>

<style>
	.wrapper {
		position: relative;
		max-width: 100%;
		display: block;
		margin: 1rem;
		overflow: hidden;
		transition: scale 0.2s;
	}

	.image {
		display: block;
		max-width: 100%;
		height: auto;
		border-radius: 0.5rem;
		border: 0.15rem gray solid;
		margin-bottom: 0.4rem;
	}

	.title {
		text-align: right;
		font-size: 1.5rem;
		font-weight: 400;
	}

	.wrapper:hover {
		scale: 1.01;
	}

	.wrapper:hover > .image,
	.wrapper:focus > .image {
		border-color: rgb(147, 187, 227);
	}

	.wrapper:hover > .title,
	.wrapper:focus > .title {
		color: rgb(147, 187, 227);
	}
</style>
