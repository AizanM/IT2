var x = 0;
var y = 0;
var fartX = 3;
var fartY=2;
var r=0;
var g=0;
var b=0;
function setup() {
  // put setup code here
  createCanvas(400, 400);
}
function draw() {
  // put drawing code here
  background(0);
  stroke(255);
  strokeWeight(4);circle(x,y,50);
  if (x > width){
     fartX =-3;
     r=random(0,255);g=random(0,255);b=random(0,255);
     fill(r,g,b);
  } else if (x<0) {
    fartX= 3;
     r=random(0,255);g=random(0,255);b=random(0,255);
     fill(r,g,b);
  } else if (y>height){fartY =-2;
     r=random(0,255);g=random(0,255);b=random(0,255);
     fill(r,g,b);}
  else if (y<0){fartY =2;
     r=random(0,255);g=random(0,255);b=random(0,255);
     fill(r,g,b)}
  x=x+fartX;y=y+fartY;
}
