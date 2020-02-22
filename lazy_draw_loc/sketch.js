var x = 1; //current mouse x position
var y = 1; //current mouse y position
var px = 1; //current mouse x position
var py = 1; //current mouse y position
var ease = 0.05;
var radius = 20;

function setup() {
  createCanvas(720, 400);
  background(100, 200, 200);
  //noStroke();
  stroke(102);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {


  var targetX = mouseX;
  var dx = targetX - x;
  x += dx * ease;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * ease;

  if (abs(dy) < radius && abs(dx) < radius) {
    fill(255, 0, 0);
  } else {
    fill(255)
  }
  ellipse(x, y, radius, radius);
  line(mouseX, mouseY, px, py);
  //line(mouseX, mouseY, pmouseX, pmouseY);
  py = pmouseY;
  px = pmouseX;
}