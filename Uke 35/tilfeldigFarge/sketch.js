function setup() {
  // put setup code here
  createCanvas(400, 400);

}
Math.random(0,255)

var tall1 =Math.round(Math.random()*255);
 var tall2 =Math.round(Math.random()*255);
 var tall3 =Math.round(Math.random()*255);
 console.log(tall1,tall2,tall3);
 document.write(tall1,tall2,tall3)
function draw() {
  // put drawing code here

  background(220);
rect(50, 60, 200,250);
fill(tall1, tall2, tall3);
}
