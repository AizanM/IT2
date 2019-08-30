function setup() {
  // put setup code here
  createCanvas(400, 400);

}
var x = 0; var y = 0;
var fartX = 3;var fartY=2;

function draw() {
  // put drawing code here
  background(0);
  stroke(255);
  strokeWeight(4);circle(x,y,50);
  if (x > width){
     fartX =-3;fill("gray");
  } else if (x<0) {
    fartX= 3;fill("pink")
  } else if (y>height){fartY =-2;fill("white")}
  else if (y<0){fartY =2;fill("green")}
  x=x+fartX;y=y+fartY;
}
