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
				background: resolve(fieldsDir, 'background', 'index.ts'),
				content: resolve(fieldsDir, 'content', 'index.ts'),
				options: resolve(fieldsDir, 'options', 'index.html'),
				monitor: resolve(libsDir, 'websocket_monitor.ts'),
			},
			output: {
				entryFileNames: chunk => {
					if (chunk.name === 'monitor') return 'src/libs/websocket_monitor.js'

					return `src/fields/${chunk.name}/index.js`
				},
			},
		},
	},
})
