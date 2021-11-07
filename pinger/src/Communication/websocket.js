const WEBSOCKET_IP = "localhost"; //51.154.144.230
const WEBSOCKET_PORT = "8000";
const websocket = new WebSocket(
    "ws://" + WEBSOCKET_IP + ":" + WEBSOCKET_PORT,
    "pi"
);
console.log(websocket);

export default websocket;