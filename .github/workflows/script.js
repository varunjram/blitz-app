// Mock data update function
function updateSensorData() {
    const temperature = (Math.random() * 30).toFixed(2);
    const pressure = (Math.random() * 1000).toFixed(2);
    const angle = (Math.random() * 360).toFixed(2);

    document.getElementById('temperature').innerText = temperature;
    document.getElementById('pressure').innerText = pressure;
    document.getElementById('angle').innerText = angle;

    // Change color based on temperature
    const tempElement = document.getElementById('temperature');
    if (temperature > 25) {
        tempElement.style.color = 'red';
    } else if (temperature > 15) {
        tempElement.style.color = 'orange';
    } else {
        tempElement.style.color = 'blue';
    }

    // Change color based on pressure
    const pressureElement = document.getElementById('pressure');
    if (pressure > 800) {
        pressureElement.style.color = 'green';
    } else {
        pressureElement.style.color = 'purple';
    }

    // Change color based on angle
    const angleElement = document.getElementById('angle');
    if (angle > 180) {
        angleElement.style.color = 'brown';
    } else {
        angleElement.style.color = 'black';
    }
}

// Mock command send function
function sendCommand() {
    const command = document.getElementById('device-control').value;
    alert('Command sent: ' + command);
}

// Update sensor data every 5 seconds
setInterval(updateSensorData, 5000);

// Initial data update
updateSensorData();
