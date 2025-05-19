const WebSocket = require('ws')
const port = 9001;
const wss = new WebSocket.Server({port});

const clients = new Set();

wss.on('connection', (ws) => {
    clients.add(ws);
    console.log('Client connected');

    ws.on('message', (message) => {
        const text = message.toString();
        console.log(text)
        for (const client of clients) {
            if(client.readyState === WebSocket.OPEN){
                client.send(text);
            }
        }
    })
    
    ws.on('close', () => {
        clients.delete(ws);
        console.log('Client disconnected');
    })
})

console.log(`WS server running on ws://localhost:${port}`);