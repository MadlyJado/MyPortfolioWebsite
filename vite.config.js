
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	base: '/MyPortfolioWebsite/',
	plugins: [sveltekit()],
}

export default defineConfig(config);
