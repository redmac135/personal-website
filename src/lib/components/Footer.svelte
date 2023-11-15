<script lang="ts">
	import { PROJECTS_LIST as projects } from '../../info';
</script>

<footer>
	<div class="title">
		<!-- TODO: add dyanmically changing logo -->
		<div class="logo" />
		<div class="text">Ethan Zhao</div>
	</div>
	<ul class="section">
		<h2>Projects</h2>
		{#each projects as project}
			<a href={project.url}>{project.title}</a>
		{/each}
	</ul>
	<ul class="section">
		<h2>Socials</h2>
		<!-- TODO: add socials here -->
	</ul>
</footer>
