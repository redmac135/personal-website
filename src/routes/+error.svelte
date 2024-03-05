<script lang="ts">
	import { page } from '$app/stores';
	import LogoLink from '$lib/components/LogoLink.svelte';
</script>

<main>
	<LogoLink />
	<div class="centered">
		<p class="aw-text">aw man...</p>
		<div class="error-message">
			<h1>{$page.status}</h1>
			<p>{$page.error?.message}</p>
		</div>
		<br />
		<p>sorry about that. Let me <a href="/">take you back</a>.</p>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 80vh;
	}

	.error-message {
		text-align: center;
		padding: 2rem;
		border-radius: 1rem;
		border: 1px solid white;
	}

	.aw-text {
		padding-bottom: 0.5rem;
	}

	a {
		color: lightblue;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
