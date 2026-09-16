import { readFile } from 'node:fs/promises';
import { compile } from 'mdsvex';
import { describe, expect, it } from 'vitest';
import mdsvexConfig from '../mdsvex.config.js';

const routes = [
	'src/routes/projects/personal-website/+page.svx',
	'src/routes/workshops/intro-webdev/+page.svx'
];

describe('mdsvex content routes', () => {
	it.each(routes)('compiles %s with its article layout and metadata', async (route) => {
		const source = await readFile(route, 'utf8');
		const compiled = await compile(source, mdsvexConfig);

		if (!compiled) throw new Error(`mdsvex did not compile ${route}`);

		expect(compiled.code).toContain('ArticleImage');
		expect(compiled.code).toMatch(/<p>[\s\S]*<\/p>/);
	});
});
