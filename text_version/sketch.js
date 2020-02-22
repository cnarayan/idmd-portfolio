var prj = "lazy doggy";
var ver = 1.2;

function projver() {
  textSize(10);
  textAlign(RIGHT);
  fill(0);
  text(prj + ver, width, height - 5);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  projver();
  textSize(64);
  textAlign(CENTER)
  text(key, width / 2, height / 2);
}
