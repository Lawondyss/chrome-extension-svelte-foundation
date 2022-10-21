import './app.css'
import App from './App.svelte'

const name = 'Chrome extension'

function run() {
    new App({
        target: document.body,
        props: { name },
    })
}

document.addEventListener('DOMContentLoaded', run)
