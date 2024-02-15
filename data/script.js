// Get current sensor readings when the page loads  
//window.addEventListener('load', getReadings);

var gateway = `ws://${window.location.hostname}/ws`;
var websocket;

// ----------------------------------------------------------------------------
// Initialization
// ----------------------------------------------------------------------------

window.addEventListener('load', onLoad);

function onLoad(event) {
    initWebSocket();
}

// ----------------------------------------------------------------------------
// WebSocket handling
// ----------------------------------------------------------------------------

function initWebSocket() {
    console.log('Trying to open a WebSocket connection...');
    websocket = new WebSocket(gateway);
    websocket.onopen    = onOpen;
    websocket.onclose   = onClose;
    websocket.onmessage = onMessage;
}

function onOpen(event) {
    console.log('Connection opened');
}

function onClose(event) {
    console.log('Connection closed');
    setTimeout(initWebSocket, 2000);
}

function onMessage(event) {
    console.log(event.data);
    var data = JSON.parse(event.data); 
    if ("NPPressure" in data) {
        document.getElementById('NPPressure').innerHTML = "NP Pressure\n"+data.NPPressure
    }
    if ("NPFlow" in data) {
        NPFlow.value = data.NPFlow;
        document.getElementById('NPFlow').innerHTML = "NP Flow\n"+data.NPFlow
    }
    if ("HPPressure" in data) {
        HPPressure.value = data.HPPressure;
        document.getElementById('HPPressure').innerHTML = "HP Pressure\n"+data.HPPressure
    }
    if ("HPFlow" in data) {
        HPFlow.value = data.HPFlow;
        document.getElementById('HPFlow').innerHTML = "HP Flow\n"+data.HPFlow
    }
} 