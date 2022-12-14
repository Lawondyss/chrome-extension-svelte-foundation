import 'src/main.css'
import App from './App.svelte'

const name = 'Chrome extension'

function run(): void {
    new App({
        target: document.body,
        props: { name },
    })
}

document.addEventListener('DOMContentLoaded', run)
