function setup() {
  // put setup code here
  createCanvas(400, 400);
  background("pink");
strokeWeight(2);
}

function draw() {
  // put drawing code here
  //background(220);
//line(mouseX,mouseY, pmouseX,pmouseY)
if (mouseIsPressed){
  line(mouseX,mouseY, pmouseX,pmouseY);
}
}
