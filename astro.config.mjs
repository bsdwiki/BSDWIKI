import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	integrations: [
		starlight({
			title: 'BSDWIKI',
			editLink: {
    			baseUrl: 'https://github.com/bsdwiki/bsdwiki/edit/main/',
  			},
			social: {
				github: 'https://github.com/bsdwiki',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: '第一章 走进 FreeBSD',
					autogenerate: { directory: 'di-1-zhang-zou-jin-freebsd' },
				},
			],
		}),
	],
});
