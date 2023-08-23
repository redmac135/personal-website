<script lang="ts">
	import Article from '$lib/components/Article.svelte';
</script>

<Article let:Header>
	<Header let:Title let:MetaItem>
		<Title>Mindful Reflection Journal</Title>
	</Header>

	<p>
		&nbsp; &nbsp; After reviving and taking over my highschool's mindful committee, something I
		petitioned strongly for was to teach students methods to take care of themselves instead of
		directly taking care of the students. One of my favourite strategies was journaling as it
		promoted self reflection and destigmatizes mental health as a topic of discussion. However, the
		biggest barrier to journaling was it's difficulty and the time it consumed. A common solution to
		this was five minute journals which were simple but--due to their physical nature--unappealing
		to the young generation. My solution, a online mulipule choice journal which served as a mood
		tracker and a log for how past days generally felt.
	</p>

	<p>
		&nbsp; &nbsp; Having just gone through many small Django side projects, I decided to use that
		framework to create this app. Django is a full stack python framework which runs completely
		server side making it slow but very customizable--I later look into more front-end frameworks
		and start making more efficient API based apps.
	</p>

	<p>
		&nbsp; &nbsp; This project had many phases. First was the SQL server schema which I created
		using Django's class based ORM. After that, front-end design began which consistented entirely
		of HTML, css, and tailwindcss with minimal javascript for form and navbar control. Throuhgout
		this process, I asssigned different teams to come up with questions, color palettes, and a
		select few to help with the website design.
	</p>

	<p>
		&nbsp; &nbsp; While the final project never got to see an offical release, it was still a large
		project that was used by a number of people before I took it offline. From this project, I
		learned a lot about database schema design, query optimizations, and UI/UX design. Overall,
		while not published, a very fulfilling web app.
	</p>
</Article>

<style>
	p {
		padding: 1.5rem 1.5rem 0 1.5rem;
	}
</style>
