<script lang="ts">
	import { darkMode } from "../stores/stores";

	function toggleTheme() {
		darkMode.update(value => !value);

		// currently used for global.css body style
		$darkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
	}
</script>

<label class="wrapper">
	<input
		checked={$darkMode}
		on:click={toggleTheme}
		type="checkbox"
		name="theme-toggle"
		id="theme-toggle"
	/>
	<label
		for="theme-toggle"
		class="button"
	/>
</label>

<style lang="postcss">
	.wrapper {
		position: relative;
		display: inline-flex;
		align-items: center;
		cursor: pointer;
	}

	.button {
		width: 2.75rem;
		height: 1.5rem;
		border-radius: 999px;

		background-color: #e5e7eb;
	}

	.button::after {
		content: "";
		position: absolute;
		top: 2px;
		left: 2px;
		height: 1.25rem;
		width: 1.25rem;
		background-color: #fbbf24;
		border-radius: 999px;
		transition-property: all;
    	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    	transition-duration: 150ms;
	}

	input:checked+.button {
		background-color: #374151;
		border-color: #4b5563;
	}

	input:checked+.button::after {
		transform: translateX(100%);
		background: transparent;
	}

	#theme-toggle {
		display: none;
	}

	#theme-toggle:checked + label::after {
		box-shadow: inset -6px -5px 1px 1px rgb(221, 221, 221);
	}
</style>
