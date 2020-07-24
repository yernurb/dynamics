let pg;

function setup() {
  createCanvas(800, 600, 'P2D');
  background(51);
  pg = createGraphics(100, 100, 'P2D')
}

function draw() {
  stroke(10);
  rect(10, 20, 30, 40);
  pg.background(200);
  pg.fill(50);
  pg.noStroke();
  pg.ellipse(50, 50, 10, 10)
  image(pg, 20, 30, 100, 100);
}

