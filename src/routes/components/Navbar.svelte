<script lang="ts">
    import ThemeToggle from "./ThemeToggleButton.svelte";
    import { darkMode } from "../stores/stores";
</script>

<div class="theme-wrapper">
    <ThemeToggle />
</div>

<style lang="postcss">
    .theme-wrapper {
        position: absolute;
        top: 0.75rem;
        right: 1rem;
    }
</style>