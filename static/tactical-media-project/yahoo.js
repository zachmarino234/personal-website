document.addEventListener("click", function (event) {
  var image = new Image();
  image.src = "404old.png";
  image.style.position = "fixed";
  image.style.transform = "translate(-50%, -50%)";
  image.style.width = "250px";
  image.style.height = "auto";
  image.style.top = event.clientY + "px";
  image.style.left = event.clientX + "px";
  document.body.appendChild(image);
});

function placeRandomImage() {
  var image = new Image();
  image.src = "blackBox.jpeg";
  image.style.position = "absolute";
  image.style.width = "50px";
  image.style.height = "50px";
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var randomX = Math.floor(Math.random() * screenWidth);
  var randomY = Math.floor(Math.random() * screenHeight);
  image.style.left = randomX + "px";
  image.style.top = randomY + "px";
  document.body.appendChild(image);
}

setInterval(placeRandomImage, 1000);
