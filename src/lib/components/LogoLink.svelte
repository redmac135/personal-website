<script lang="ts">
	import logo from '$lib/assets/whitelogo.png';
</script>

<a href="/"
	><p>Home</p>
	<img src={logo} alt="logo" /></a
>

<style>
	img {
		display: none;
		position: absolute;
		top: 1.5rem;
		left: 1.5rem;
		width: 6rem;
		height: 6rem;
		scale: 1;
		transition: scale 0.2s ease-in-out;
		will-change: scale;
	}

	p {
		position: absolute;
		top: 1rem;
		left: 1rem;
		display: flex;
		justify-content: left;
		color: #58a6ff;
		text-decoration: none;
		font-size: 1.15rem;
	}

	p:hover {
		color: #58a6ff;
		text-decoration: underline;
	}

	img:hover {
		scale: 1.1;
	}

	@media (min-width: 600px) {
		img {
			display: block;
		}

		p {
			display: none;
		}
	}
</style>
