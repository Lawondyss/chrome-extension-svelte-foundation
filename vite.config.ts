import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const srcDir = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			src: srcDir,
		},
	},
})
