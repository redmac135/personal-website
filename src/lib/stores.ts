import { writable } from 'svelte/store';

type PageData = {
	background: string;
};

const defaultPageData: PageData = {
	background: 'black'
};

export const pageData = writable<PageData>(defaultPageData);
