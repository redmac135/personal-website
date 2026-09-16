import { describe, expect, it } from 'vitest';
import { SOCIAL_LINKS } from '../src/info';
import { ABOUT_DESCRIPTION, SITE_DESCRIPTION } from '../src/site';

describe('site identity and navigation', () => {
	it('publishes the current LinkedIn destination', () => {
		expect(SOCIAL_LINKS.LINKEDIN).toBe('https://linkedin.com/in/ethanyzhao');
		expect(SITE_DESCRIPTION).toContain('fourth year');
		expect(SITE_DESCRIPTION).toContain(SOCIAL_LINKS.LINKEDIN);
	});

	it('keeps the about copy focused on Ethan’s current profile', () => {
		expect(ABOUT_DESCRIPTION).toContain('fourth year student');
		expect(ABOUT_DESCRIPTION).toContain('Western University');
	});
});
