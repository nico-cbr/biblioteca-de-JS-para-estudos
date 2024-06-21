//Função map exemplo usando rotação

let angulo = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  angulo = map(mouseX,0, width, 0,360);
  
  background(146, 83, 151);
  noStroke();
  fill(240, 99, 164);
  rectMode(CENTER);
  translate(200,200)
  rotate(angulo);
  rect(0 , 0, 256, 32)
}