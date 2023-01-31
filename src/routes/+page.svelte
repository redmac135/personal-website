<script lang="ts">
	import ThemeToggle from './ThemeToggleButton.svelte';

	import WelcomePage from './WelcomePage.svelte';
	import AboutPage from './AboutPage.svelte';

	export let menu = 1;
</script>

<header class="flex items-center m-6">
	<a href="/">
		<img
			src="https://flowbite.com/docs/images/logo.svg"
			class="h-6 mr-3 sm:h-10"
			alt="Flowbite Logo"
		/>
	</a>
	<div class="text-3xl">Ethan Zhao</div>
	<nav class="flex ml-auto">
		<a href="/" on:click|preventDefault={() => (menu = 1)} class="ml-6 text-2xl">Work</a>
		<a href="/" on:click|preventDefault={() => (menu = 2)} class="ml-6 text-2xl">About</a>
		<a href="/" class="ml-6 text-2xl">Resume</a>
	</nav>
	<div class="ml-6 pt-2">
		<ThemeToggle />
	</div>
</header>

{#if menu === 1}
	<WelcomePage />
{:else if menu === 2}
	<AboutPage />
{/if}
