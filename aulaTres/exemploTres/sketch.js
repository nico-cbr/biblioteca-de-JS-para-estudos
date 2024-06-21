//exemplo função map pra criar cronometro.

let objeto;
let jogador;
let raio = 30;
let timer = 5;
let pontos = 0;

function setup() {
  //Criando o tempo e verificando posição mouse
  createCanvas(400, 400);
  objeto = createVector(random(0, width), random(0, height));
}

function draw() {
  timer -= 1/60;
  jogador = createVector(mouseX, mouseY);
  
  background(200);
  
  //-------verificando tempo
  if (timer <= 0){
    textSize(36);
    text("FAZ O PIXI", 100, 200);
    noLoop();
  }
  
  //------Criando objeto
  circle(objeto.x, objeto.y, raio);
  
  
  //-------mapeando o tempo
  let comprimento = map(timer, 0, 5, 0, 100);
  rect(20, 20, 10, comprimento)
  
  //---exibindo os pontos
  textSize(24);
  text(pontos, 180, 40);
  
}

//--------criando o click
 function mousePressed(){
    let dis = p5.Vector.dist(jogador, objeto);
      if(dis < raio){
        objeto = createVector(random(width), random(height));
        timer += 0.5;
        pontos += 1;
      }
  }


//criar objeto CLICK --> ok
//Criar vetor CLICK --> ok
//Mover objeto quando CLiCKADO
//criar o timer com a função MAP -- > ok
//criar pontos do jogo