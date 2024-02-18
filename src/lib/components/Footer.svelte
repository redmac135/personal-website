<script lang="ts">
	import { PROJECTS_LIST as projects } from '../../info';
	import logo from '$lib/assets/whitelogo.png';
	import { SOCIAL_LINKS } from '../../info';

	const socials = Object.entries(SOCIAL_LINKS);
	export let background: string;
</script>

<footer style:background>
	<div class="left">
		<!-- TODO: add dyanmically changing logo -->
		<a href="/"><img src={logo} class="logo" alt="White Logo" /></a>
		<div class="text"><a href="/">Ethan Zhao</a></div>
	</div>
	<div class="right">
		<ul>
			<h2>Projects</h2>
			<div class="body">
				{#each projects as project}
					<li>
						<a href="/projects/{project.url}">{project.title}</a>
					</li>
				{/each}
			</div>
		</ul>
		<ul>
			<h2>Pages</h2>
			<div class="body">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/projects">Projects</a>
				</li>
				<li>
					<a href="/workshops">Workshops</a>
				</li>
			</div>
		</ul>
		<ul>
			<h2>Socials</h2>
			<div class="body">
				{#each socials as social}
					<li>
						<a target="_blank" rel="noopener noreferrer" href={social[1]}
							>{social[0].toLocaleLowerCase()}</a
						>
					</li>
				{/each}
			</div>
		</ul>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		width: 100%;
		border-top: 1px lightgray solid;
	}

	.left {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		flex-direction: column;
		padding: 1.5rem 0 2rem 1.5rem;
	}

	.logo {
		position: relative;
		width: 6rem;
		padding-bottom: 1.5rem;
	}

	.left > .text {
		font-size: 2rem;
		font-weight: 400;
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding-top: 1rem;
	}

	ul {
		position: relative;
		display: flex;
		list-style-type: none;
		margin-bottom: 1.5rem;
	}

	ul > h2 {
		width: 9rem;
	}

	.body {
		width: 9rem;
	}

	.body > li {
		padding-bottom: 0.75rem;
	}

	h2 {
		color: grey;
		font-family: 'Courier New', Courier, monospace;
		font-size: medium;
	}

	a {
		text-transform: capitalize;
		margin-left: 0;
		transition: margin-left 200ms;
	}

	a:hover {
		margin-left: 1rem;
	}

	@media (min-width: 700px) {
		footer {
			flex-direction: row;
		}

		.left {
			width: 40%;
		}
	}

	@media (min-width: 900px) {
		.left {
			display: block;
			width: 20rem;
			border-right: 1px lightgray solid;
		}

		.logo {
			position: absolute;
			top: 1rem;
			left: 1rem;
			width: 4rem;
		}

		.left > .text {
			padding-top: 7rem;
		}

		.right {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			align-items: baseline;
		}

		ul {
			display: block;
			padding-left: 2rem;
		}

		.body {
			width: 100%;
			padding-top: 1.2rem;
		}
	}
</style>
