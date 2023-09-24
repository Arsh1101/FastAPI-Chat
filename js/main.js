document.getElementById("client_id").innerText = client_id;
let ws = new WebSocket(`ws://localhost:8000/ws/${client_id}`);
ws.onmessage = function(event) {
    let history = document.getElementById('history');
    let message = document.createElement('li');
    let content = document.createTextNode(event.data);
    message.appendChild(content);
    history.appendChild(message);
};
function sendMessage(event) {
    let input = document.getElementById("messageText");
    ws.send(input.value);
    input.value = '';
    event.preventDefault();
}