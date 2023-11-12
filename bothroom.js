// Get the elements
var light = document.getElementById("light");
var lightStatus = document.getElementById("light-status");
var lightToggle = document.getElementById("light-toggle");

var efan = document.getElementById("efan");
var efanStatus = document.getElementById("efan-status");
var efanToggle = document.getElementById("efan-toggle");

// Define the functions
function toggleLight() {
    if (lightStatus.innerHTML == "OFF") {
        lightStatus.innerHTML = "ON";
        lightToggle.classList.add("on");
        lightToggle.classList.remove("off");
        // Send a request to turn on the light
    } else {
        lightStatus.innerHTML = "OFF";
        lightToggle.classList.add("off");
        lightToggle.classList.remove("on");
        // Send a request to turn off the light
    }
}

function toggleFan() {
    if (efanStatus.innerHTML == "OFF") {
        efanStatus.innerHTML = "ON";
        efanToggle.classList.add("on");
        efanToggle.classList.remove("off");
        // Send a request to turn on the fan
    } else {
        efanStatus.innerHTML = "OFF";
        efanToggle.classList.add("off");
        efanToggle.classList.remove("on");
        // Send a request to turn off the fan
    }
}


// Add the event listeners
lightToggle.addEventListener("click", toggleLight);
efanToggle.addEventListener("click", toggleFan);