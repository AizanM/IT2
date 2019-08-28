var x = 50;
var y = 200;
var bredde=200;
var hoyde = 100;
function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background(220);
  fill("white");
rect(x,y,bredde,hoyde);fill(255,255,0);
triangle(x,y,x+bredde,y,x+bredde/2,y-hoyde);

}
