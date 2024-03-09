<h1><slot /></h1>

<style>
	h1 {
		text-transform: uppercase;
		z-index: inherit;
		text-align: center;
		font-size: 2.2rem;
		font-weight: 400;
		margin-bottom: 1rem;
	}

	@media (min-width: 500px) {
		h1 {
			font-size: 2.5rem;
		}
	}

	@media (min-width: 900px) {
		h1 {
			font-size: 3rem;
			margin-bottom: 1.5rem;
		}
	}
</style>
