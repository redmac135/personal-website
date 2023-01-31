<script lang="ts">
	let darkMode = false;

	function toggleTheme() {
		darkMode = !darkMode;

		darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
	}
</script>

<div>
	<input
		checked={darkMode}
		on:click={toggleTheme}
		type="checkbox"
		name="theme-toggle"
		id="theme-toggle"
	/>
	<label for="theme-toggle" />
</div>

<style lang="postcss">
	#theme-toggle {
		@apply invisible;
	}

	#theme-toggle + label {
		@apply cursor-pointer h-12 w-12 absolute top-6 right-12 rounded-full duration-300;
	}

	#theme-toggle:not(:checked) + label {
		@apply bg-amber-400;
	}

	#theme-toggle:checked + label {
		@apply bg-transparent;
		box-shadow: inset -18px -16px 1px 1px #ddd;
	}
</style>
