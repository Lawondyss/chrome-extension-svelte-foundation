import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const srcDir = resolve(__dirname, 'src')
const libsDir = resolve(srcDir, 'libs')
const componentsDir = resolve(srcDir, 'components')
const fieldsDir = resolve(srcDir, 'fields')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			src: srcDir,
			libs: libsDir,
			components: componentsDir,
		},
	},
	build: {
		rollupOptions: {
			input: {
				popup: resolve(fieldsDir, 'popup', 'index.html'),
			},
			output: {
				entryFileNames: (chunk) => `src/fields/${chunk.name}/index.js`,
			},
		},
	},
})
