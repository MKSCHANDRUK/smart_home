// Get the elements
var pump = document.getElementById("pump");
var pumpStatus = document.getElementById("pump-status");
var pumpToggle = document.getElementById("pump-toggle");

var wm = document.getElementById("wm");
var wmStatus = document.getElementById("wm-status");
var wmToggle = document.getElementById("wm-toggle");

var sl = document.getElementById("sl");
var slStatus = document.getElementById("sl-status");
var slToggle = document.getElementById("sl-toggle");

// Define the functions
function togglepump() {
    if (pumpStatus.innerHTML == "OFF") {
        pumpStatus.innerHTML = "ON";
        pumpToggle.classList.add("on");
        pumpToggle.classList.remove("off");
        // Send a request to turn on the light
    } else {
        pumpStatus.innerHTML = "OFF";
        pumpToggle.classList.add("off");
        pumpToggle.classList.remove("on");
        // Send a request to turn off the light
    }
}

function togglewm() {
    if (wmStatus.innerHTML == "OFF") {
        wmStatus.innerHTML = "ON";
        wmToggle.classList.add("on");
        wmToggle.classList.remove("off");
        // Send a request to turn on the light
    } 
    else {
        wmStatus.innerHTML = "OFF";
        wmToggle.classList.add("off");
        wmToggle.classList.remove("on");
        // Send a request to turn off the light
    }
}

function togglesl() {
    if (slStatus.innerHTML == "OFF") {
        slStatus.innerHTML = "ON";
        slToggle.classList.add("on");
        slToggle.classList.remove("off");
        // Send a request to turn on the fan
    } else {
        slStatus.innerHTML = "OFF";
        slToggle.classList.add("off");
        slToggle.classList.remove("on");
        // Send a request to turn off the fan
    }
}

// Add the event listeners
pumpToggle.addEventListener("click", togglepump);
wmToggle.addEventListener("click", togglewm);
slToggle.addEventListener("click", togglesl);