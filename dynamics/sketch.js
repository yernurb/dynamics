let start;
let xoff;
let inc;

function setup() {
  createCanvas(800, 600, 'P2D');
  start = 0;
  inc = 0.005;
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  xoff = start;
  beginShape();
    for (var x=0; x<width; x++){
      let y = map(noise(xoff), 0, 1, -height/4, height/4);
      vertex(x, height/2+y);
      xoff += inc;
    }    
  endShape();
  start += inc;
}

