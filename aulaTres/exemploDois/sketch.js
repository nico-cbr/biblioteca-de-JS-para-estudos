// usando função map comm radianoss

//usando função map para mapear o angulo de rotação em radianos
//Implemetando a velocidade e aceleração angular
// a função map usa cinco parametros
//valor inicial(posiçã atual do mouse) e um intervalo inicial( posição 0 e width da tela) e intevalo final( medido em radianos)

let angulo = 0;
let anguloV = 0;
let anguloA = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS)
}

function draw() {
  anguloA = map(mouseX, 0, width, -0.002, 0.002);
  
  background(146, 83, 161);
  noStroke();
  fill(240, 99, 164);
  rectMode(CENTER);
  translate(200,200);
  rotate(angulo)
  rect(0, 0, 256, 32);
  
  angulo += anguloV;
  anguloV += anguloA;
}