<script lang="ts">
	export let href: string;
</script>

<a {href} target="_blank" rel="noreferrer">
	<slot />
</a>

<style>
	a {
		color: lightblue;
		text-decoration: underline;
	}
</style>
