const WEBSOCKET_IP = "localhost";
const WEBSOCKET_PORT = "8000";
const websocket = new WebSocket(
    "ws://" + WEBSOCKET_IP + ":" + WEBSOCKET_PORT,
    "pi"
);
console.log(websocket);

export default websocket;