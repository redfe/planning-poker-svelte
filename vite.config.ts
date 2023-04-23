import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		env: {
			PUBLIC_BASE_URL: ''
		},
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
