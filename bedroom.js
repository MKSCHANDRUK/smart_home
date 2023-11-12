// Get the elements
var light1 = document.getElementById("light1");
var lightStatus1 = document.getElementById("light-status1");
var lightToggle1 = document.getElementById("light-toggle1");

var light2 = document.getElementById("light2");
var lightStatus2 = document.getElementById("light-status2");
var lightToggle2 = document.getElementById("light-toggle2");

var fan = document.getElementById("fan");
var fanStatus = document.getElementById("fan-status");
var fanToggle = document.getElementById("fan-toggle");

var ac = document.getElementById("ac");
var acStatus = document.getElementById("ac-status");
var acToggle = document.getElementById("ac-toggle");

// Define the functions
function toggleLight1() {
    if (lightStatus1.innerHTML == "OFF") {
        lightStatus1.innerHTML = "ON";
        lightToggle1.classList.add("on");
        lightToggle1.classList.remove("off");
        // Send a request to turn on the light
    } else {
        lightStatus1.innerHTML = "OFF";
        lightToggle1.classList.add("off");
        lightToggle1.classList.remove("on");
        // Send a request to turn off the light
    }
}

function toggleLight2() {
    if (lightStatus2.innerHTML == "OFF") {
        lightStatus2.innerHTML = "ON";
        lightToggle2.classList.add("on");
        lightToggle2.classList.remove("off");
        // Send a request to turn on the light
    } 
    else {
        lightStatus2.innerHTML = "OFF";
        lightToggle2.classList.add("off");
        lightToggle2.classList.remove("on");
        // Send a request to turn off the light
    }
}

function toggleFan() {
    if (fanStatus.innerHTML == "OFF") {
        fanStatus.innerHTML = "ON";
        fanToggle.classList.add("on");
        fanToggle.classList.remove("off");
        // Send a request to turn on the fan
    } else {
        fanStatus.innerHTML = "OFF";
        fanToggle.classList.add("off");
        fanToggle.classList.remove("on");
        // Send a request to turn off the fan
    }
}

function toggleAC() {
    if (acStatus.innerHTML == "OFF") {
        acStatus.innerHTML = "ON";
        acToggle.classList.add("on");
        acToggle.classList.remove("off");
        // Send a request to turn on the AC
    } else {
        acStatus.innerHTML = "OFF";
        acToggle.classList.add("off");
        acToggle.classList.remove("on");
        // Send a request to turn off the AC
    }
}

// Add the event listeners
lightToggle1.addEventListener("click", toggleLight1);
lightToggle2.addEventListener("click", toggleLight2);
fanToggle.addEventListener("click", toggleFan);
acToggle.addEventListener("click", toggleAC);