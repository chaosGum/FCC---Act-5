// EVENT LISTENERS
//ids
document.getElementById("me").addEventListener("mouseover", toggleName);
document.getElementById("web").addEventListener("mouseleave", displayName);


//classes
let landingClass = document.getElementsByClassName("landing");
Array.from(landingClass).forEach(function(element) {
  element.addEventListener("mouseover", hideNav); //hides navbar
});

let homeClass = document.getElementsByClassName("home-card");
//since classes are stored in an array. we have to loop to each value to assign functions
Array.from(homeClass).forEach(function(element) {
  element.addEventListener("mouseenter", glow);
  element.addEventListener("mouseleave", unglow);
  element.addEventListener("click", showNav); //shows navbar upon category click
});


// FUNCTIONS
// NAME TOGGLES
function toggleName() {
  var x = document.getElementById("web");
  var y = document.getElementById("name");
  x.style.display = "block";
  y.style.display = "none";
}

function displayName() {
  var x = document.getElementById("web");
  var y = document.getElementById("name");
  y.style.display = "block";
  x.style.display = "none";
}

// GETS THE NAV CARDS TO GLOW UPON MOUSE OVER
function glow(event) {
  var x = document.getElementById(event.target.id);
  x.style.opacity = "1";
}
// REMOVES GLOW
function unglow(event) {
  var x = document.getElementById(event.target.id);
  x.style.opacity = "0.2";
}
// BUTTON GLOW
function bGlow(event) {
  var x = document.getElementById(event.target.id).parentNode.nodeName;
  var y = document.getElementById(event.target.id);
  x.style.opacity = "1";
  y.style.opacity = "1";
}

// NAVBAR SHOW/HIDE FUNCTION
function hideNav() {
  var x = document.getElementById("navbar");
  x.style.display = "none";
  console.log("hide");
}
function showNav() {
  var x = document.getElementById("navbar");
  x.style.display = "block";
  console.log("show");
}

