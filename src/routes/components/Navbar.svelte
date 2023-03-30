<script lang="ts">
    import ThemeToggle from "./ThemeToggleButton.svelte";
    import { darkMode } from "../stores/stores";

    let menu = 1;

    $: logo = $darkMode === false ? '/images/blacklogo.png' : '/images/whitelogo.png';
</script>

<header class="wrapper">
	<a href="/">
		<img src={logo} class="logo" alt="Personal Logo" />
	</a>
	<div class="title">Ethan Zhao</div>
	<nav class="links-wrapper">
		<a href="/" on:click|preventDefault={() => (menu = 1)} class="link">Work</a>
		<a href="/" on:click|preventDefault={() => (menu = 2)} class="link">About</a>
		<a href="/" class="link">Resume</a>
	</nav>
	<div class="theme-wrapper">
		<ThemeToggle />
	</div>
</header>

<style lang="postcss">
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.75rem;
    }

    .logo {
        margin-right: 0.75rem;
        height: 4rem;
        min-width: max-content;
    }

    .title {
        display: none;
        font-size: 1.875rem;
        line-height: 2.25rem;
    }

    .links-wrapper {
        display: flex;
        justify-content: center;
    }

    .link {
        display: inline;
        margin-left: 1.5rem;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    .theme-wrapper {
        padding-top: 0.5rem;
    }

    @media (min-width: 640px) {
        .wrapper {
            flex-direction: row;
        }

        .title {
            display: block;
        }

        .links-wrapper {
            margin-left: auto;
        }

        .theme-wrapper {
            margin-left: 1.5rem;
        }
    }
</style>