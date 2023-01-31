<script lang="ts">
	export let darkMode = false;

	function toggleTheme() {
		darkMode = !darkMode;

		darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
	}
</script>

<label class="relative inline-flex items-center cursor-pointer">
	<input
		checked={darkMode}
		on:click={toggleTheme}
		type="checkbox"
		name="theme-toggle"
		id="theme-toggle"
	/>
	<label
		for="theme-toggle"
		class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:after:translate-x-full dark:after:bg-transparent after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-amber-400 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
	/>
</label>

<style lang="postcss">
	#theme-toggle {
		display: none;
	}

	#theme-toggle:checked + label::after {
		box-shadow: inset -6px -5px 1px 1px rgb(221, 221, 221);
	}
</style>
