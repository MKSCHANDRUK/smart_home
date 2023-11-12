// Get the elements
var light1 = document.getElementById("light1");
var lightStatus1 = document.getElementById("light-status1");
var lightToggle1 = document.getElementById("light-toggle1");

var light2 = document.getElementById("light2");
var lightStatus2 = document.getElementById("light-status2");
var lightToggle2 = document.getElementById("light-toggle2");

var light3 = document.getElementById("light3");
var lightStatus3 = document.getElementById("light-status3");
var lightToggle3 = document.getElementById("light-toggle3");

var fan1 = document.getElementById("fan1");
var fanStatus1 = document.getElementById("fan-status1");
var fanToggle1 = document.getElementById("fan-toggle1");

var fan2 = document.getElementById("fan2");
var fanStatus2 = document.getElementById("fan-status2");
var fanToggle2 = document.getElementById("fan-toggle2");

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
function toggleLight3() {
    if (lightStatus3.innerHTML == "OFF") {
        lightStatus3.innerHTML = "ON";
        lightToggle3.classList.add("on");
        lightToggle3.classList.remove("off");
        // Send a request to turn on the light
    } 
    else {
        lightStatus3.innerHTML = "OFF";
        lightToggle3.classList.add("off");
        lightToggle3.classList.remove("on");
        // Send a request to turn off the light
    }
}

function toggleFan1() {
    if (fanStatus1.innerHTML == "OFF") {
        fanStatus1.innerHTML = "ON";
        fanToggle1.classList.add("on");
        fanToggle1.classList.remove("off");
        // Send a request to turn on the fan
    } else {
        fanStatus1.innerHTML = "OFF";
        fanToggle1.classList.add("off");
        fanToggle1.classList.remove("on");
        // Send a request to turn off the fan
    }
}
function toggleFan2() {
    if (fanStatus2.innerHTML == "OFF") {
        fanStatus2.innerHTML = "ON";
        fanToggle2.classList.add("on");
        fanToggle2.classList.remove("off");
        // Send a request to turn on the fan
    } else {
        fanStatus2.innerHTML = "OFF";
        fanToggle2.classList.add("off");
        fanToggle2.classList.remove("on");
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
lightToggle3.addEventListener("click", toggleLight3);
fanToggle1.addEventListener("click", toggleFan1);
fanToggle2.addEventListener("click", toggleFan2);
acToggle.addEventListener("click", toggleAC);