function setup() {
  // put setup code here
  createCanvas(400, 400);
    background(220);
}
var side=150;
var xPos=50; var yPos =50;
function draw() {
  // put drawing code here

while (side>0) {
  rect(xPos,yPos,side,side);
  xPos=xPos+10;
  yPos+=10; //øker med 10
  side = side -20;
}
}
