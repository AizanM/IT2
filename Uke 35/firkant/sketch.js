function setup() {
  // put setup code here
  createCanvas(400, 400);
}
/*function draw() {
  // put drawing code here
  background(220);
  stroke(255);
  strokeWeight(4);noFill();

  if (mouseX>200){
    fill(255,0,200);}
  rect(100,150,60,100);
}*/
x=30;
function draw() {
  // put drawing code here
  background(0);
  stroke(255);fill(255,255,255);
  strokeWeight(4);circle(x,40,50);
  if (x > width){
    var fart =-3;
  }
  x=x+fart;
}
