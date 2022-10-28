function logWebSocketTraffic(message: string): void {
    window.dispatchEvent(
        new CustomEvent('log-websocket-message', { detail: message })
    )
}

function initialize(): void {
    const original = window.WebSocket

    const decorated = function (url: string | URL, protocols?: string | string[] | undefined): WebSocket {
        const socket = new original(url, protocols)

        socket.addEventListener('open', evt => {
            console.log('WebSocket OPEN', { evt });
        })

        socket.addEventListener('message', evt => {
            logWebSocketTraffic(evt.data)
        })

        socket.addEventListener('close', evt => {
            console.log('WebSocket CLOSE', { evt });
        })

        const socketSend = socket.send
        socket.send = function (data) {
            logWebSocketTraffic(typeof data === 'string' ? data : JSON.stringify(data))
            socketSend.call(socket, data)
        }

        return socket
    }

    decorated.prototype = original.prototype
    decorated.prototype.constructor = decorated

    window.WebSocket = decorated
}

export default initialize()
