<script lang="ts">
	import ThemeToggle from './ThemeToggleButton.svelte';
</script>

<p>BODY</p>

<ThemeToggle />

<style lang="postcss">
	:global(body) {
		background-color: #f2eee2;
		color: #0084f6;
		transition: background-color 0.3s;
	}
	:global(body.dark) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
</style>
