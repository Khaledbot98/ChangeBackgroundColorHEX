// (function () {

var btn = document.getElementById("btn");
var body = document.querySelector("body");
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var value = document.getElementById("hex-value");

var f = (body.style.backgroundColor = "#DDD");
value.textContent = f;

btn.addEventListener("click", ChangeColor);

function ChangeColor() {
  var hex = "#";

  for (let i = 0; i < 6; i++) {
    var colorIndex = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[colorIndex];
  }
  value.textContent = hex;
  body.style.backgroundColor = hex;
}

// })();
