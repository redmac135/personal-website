<script lang="ts">
	export let item: string;
</script>

<div class="meta">
	<div class="item">{item}</div>
	<p class="value"><slot /></p>
</div>

<style>
	.meta {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 1rem;
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
</style>
