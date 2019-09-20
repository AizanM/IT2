function setup() {
  // put setup code here
  createCanvas(1000, 900);
  background(220);
}

function draw() {
  // put drawing code here
  var d =5;stroke(0,255.67,0);
while (d<=width){
  noFill();
  circle(width/2,height/2,d);
  d+=10;
}
}
