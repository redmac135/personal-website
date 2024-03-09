<script lang="ts">
	export let item: string;
	export let link: [string, string];
</script>

<div class="meta">
	<div class="item">{item}</div>
	<a href={link[0]} target="_blank" rel="noopener" class="value">{link[1]}</a>
</div>

<style>
	.meta {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 0.4rem;
		white-space: nowrap;
	}

	.item {
		background-color: rgba(106, 174, 106, 0.199);
		color: rgb(97, 244, 97);
		border-radius: 0.1rem;
		padding-left: 0.2rem;
		padding-right: 0.2rem;
		padding-bottom: 0.1rem;
		padding-top: 0.1rem;
		margin-right: 0.25rem;

		text-transform: uppercase;
		font-weight: 600;
		font-size: 0.9rem;
	}

	a {
		font-size: 1rem;
		word-wrap: break-word;
		min-width: 0;
		overflow-y: auto;
	}

	@media (min-width: 500px) {
		a {
			font-size: 1.25rem;
		}

		.meta {
			margin-left: 1rem;
		}
	}

	@media (min-width: 900px) {
		.meta {
			margin-left: 2rem;
		}
	}
</style>
