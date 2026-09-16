import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import PersonalWebsite from '../src/routes/projects/personal-website/+page.svx';
import IntroWebdev from '../src/routes/workshops/intro-webdev/+page.svx';

describe('mdsvex content routes', () => {
	it('renders the personal website article with metadata and navigation', () => {
		render(PersonalWebsite);

		expect(screen.getByRole('heading', { name: 'Personal Website' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute(
			'href',
			'/?scrollto=projects'
		);
		expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
			'content',
			'A personal portfoilo website coded by Ethan Zhao in Sveltekit which showcases his past projects.'
		);
		expect(screen.getByAltText('Screenshot of Personal Website Homepage')).toBeInTheDocument();
	});

	it('renders representative workshop markdown content', () => {
		render(IntroWebdev);

		expect(
			screen.getByRole('heading', { name: 'Beginning your Journey into Web Dev' })
		).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /workshops/i })).toHaveAttribute('href', '/workshops');
		expect(screen.getByRole('heading', { name: 'Windows' })).toBeInTheDocument();
		expect(screen.getByText(/Commands differ between MacOS and Windows users/)).toBeInTheDocument();
	});
});
