import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Homepage from '../src/routes/+page.svelte';

describe('homepage identity and navigation', () => {
	it('renders current metadata and profile links', () => {
		render(Homepage);

		expect(document.title).toBe('Ethan Zhao');
		expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
			'content',
			'Ethan Zhao is a fourth year Mechatronics Engineering and Business HBA student who builds useful apps and leads hands-on engineering projects.'
		);
		expect(
			screen.getByText(/fourth year Mechatronics Engineering and Business HBA student/)
		).toBeInTheDocument();
		expect(screen.queryByRole('link', { name: /LinkedIn/i })).not.toBeInTheDocument();
	});
});
