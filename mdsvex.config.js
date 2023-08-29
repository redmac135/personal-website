import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineConfig({
	extensions: ['.svx'],
	layout: {
		article: path.join(dirname, './src/lib/components/layouts/article-layout.svelte')
	}
});

export default config;
