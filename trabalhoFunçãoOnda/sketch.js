function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  rotateX(55);
  rotateY(45)
  noFill();
  stroke(255)
  
  for(let i = 0; i < 40; i++){
    let r = map(sin(frameCount / 2), -1, 2, 0, 200);
    let g = map(i, 0, 50, 100, 200);
    let b = map(cos(frameCount), -1, 2, 200, 100);
    stroke(r,g,b);
    
    beginShape()
    for(let j = 0; j < 360; j+=10){
      let rad = i * 5;
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount * 5 + i * 20)*50;
      vertex(x,y,z);
    }
    endShape(CLOSE);
  }
  
  for(let t = 0; t < 40; t++){
   let r = map(sin(frameCount / 2), -1, 2, 0, 200);
   let g = map(t, 0, 50, 100, 200);
   let b = map(cos(frameCount), -1, 2, 200, 100);
   stroke(r,g,b);
    
   beginShape()
   for(let k = 0; k < 360; k+=65){
     let radio = t * 0.5;
     let b = radio * cos(k);
     let v = radio * sin(k);
     let c = sin(frameCount * 5 + t * 5)*90;
     vertex(b,v,c);
   }
   endShape(CLOSE);
 }
}