// Injects script with WebSocket monitor to DOM of website
const scriptElm = document.createElement('script')
scriptElm.src = chrome.runtime.getURL('src/libs/websocket_monitor.js')

;(document.head || document.documentElement).appendChild(scriptElm)


// Listener for catching messages from WebSocket monitor
window.addEventListener('log-websocket-message', (evt: Event) => {
    // resend message to background
    if (evt instanceof CustomEvent) chrome.runtime.sendMessage(evt.detail)
}, false)
