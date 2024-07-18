var allowedKeys = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  65: "a",
  66: "b",
};

var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var position = 0;
var image = new Image();

image.src = "iLoveLinkinPark.png";
image.classList.add("rotate");
document.addEventListener("DOMContentLoaded", function () {
  var myContainer = document.getElementById("myContainer");
});

document.addEventListener("keydown", function (e) {
  var currentKey = konamiCode[position];

  if (e.keyCode == currentKey) {
    position++;

    if (position == 10) {
      konami();
      position = 0;
    }
  } else {
    position = 0;
  }
});

function konami() {
  const sound = new Audio("numbCompressed.mp3");
  sound.play();
  myContainer.appendChild(image);
}
