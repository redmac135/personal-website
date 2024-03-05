<script lang="ts">
	import logo from '$lib/assets/whitelogo.png';
</script>

<a href="/"><img src={logo} alt="logo" /></a>

<style>
	img {
		position: absolute;
		top: 1.5rem;
		left: 1.5rem;
		width: 6rem;
		height: 6rem;
		scale: 1;
		transition: scale 0.2s ease-in-out;
		will-change: scale;
	}

	img:hover {
		scale: 1.1;
	}
</style>
