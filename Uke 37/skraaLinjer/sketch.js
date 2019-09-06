function setup() {
  createCanvas(1300, 600);
    background(220);
}
var xPos1=0; var yPos1 =0;var yPos2=0; var xPos2=0;var a=30;
function draw() {
  strokeWeight(4);stroke("black");
while (yPos1<=height) {
  line(xPos1,yPos1,xPos2,yPos2);
  yPos1=yPos1+a;xPos2=xPos2+a;
}
  if (yPos1>height){
    while (xPos1<=width) {
      line(xPos1,yPos1,xPos2,yPos2);
      xPos2=xPos2+a;
    xPos1=xPos1+a;
    }
  }
}
