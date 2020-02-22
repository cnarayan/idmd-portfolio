var x = 1; //current mouse x position
var y = 1; //current mouse y position
var ease = 0.03;
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

  var targetY = mouseY;
  var dy = targetY - y;
  y += dy * ease;

  var d = dist(targetX, targetY, x, y);
//  if (abs(dy) < radius && abs(dx) < radius) {
  if (d < radius) {  //using the distance function
    fill(255, 0, 0);
  } else {
    fill(255)
  }
  ellipse(x, y, radius, radius);
  line(mouseX, mouseY, pmouseX, pmouseY);
}