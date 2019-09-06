function setup() {
  // put setup code here
  createCanvas(400, 400);
    background(220);
}

var xPos1=0; var yPos1 =20;
function draw() {
  // put drawing code here
  strokeWeight(4);stroke("pink");
var xPos2=width;
while (yPos1<height) {
  line(xPos1,yPos1,xPos2,yPos1);
  yPos1=yPos1+20;
}
}
