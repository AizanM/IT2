function setup() {
  // put setup code here
  createCanvas(400, 400);
}
//tegner ved hjelp av prompt-boks
var xPos =Number(prompt("Skriv inn x-koordinaten"));
var yPos = Number(prompt("Skriv inn y-koordinaten"));
var bredde = Number(prompt("Skriv inn bredden"));
var hoyde = Number(prompt("Skriv inn høyden"));
var farge = prompt("skriv inn farge");
function draw() {
  // put drawing code here
  background(220);
//rect(xPos,yPos,bredde,hoyde);
fill(farge);
rect(xPos,yPos,bredde, hoyde);
line(xPos,yPos, xPos+bredde,yPos+hoyde);
line(xPos,yPos+hoyde, xPos+bredde,yPos);
strokeWeight(2);

}
