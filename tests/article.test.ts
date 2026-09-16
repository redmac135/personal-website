import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ArticleFixture from './ArticleFixture.svelte';

describe('article navigation', () => {
	it('renders the supplied backlink and article content', () => {
		render(ArticleFixture);

		expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('href', '/projects');
		expect(screen.getByRole('heading', { name: 'Representative article' })).toBeInTheDocument();
		expect(screen.getByText('Article content')).toBeInTheDocument();
	});
});
