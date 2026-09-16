import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Homepage from '../src/routes/+page.svelte';

describe('homepage identity and navigation', () => {
	it('renders current metadata and profile links', () => {
		render(Homepage);

		expect(document.title).toBe('Ethan Zhao');
		expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
			'content',
			'Ethan Zhao is a fourth year Mechatronics Engineering and Business HBA student. For current information, visit https://linkedin.com/in/ethanyzhao.'
		);
		expect(
			screen.getByText(/fourth year student studying a Mechatronics Engineering/)
		).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
			'href',
			'https://linkedin.com/in/ethanyzhao'
		);
	});
});
