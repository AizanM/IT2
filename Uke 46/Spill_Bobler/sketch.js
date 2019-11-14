class Boble{
  constructor(){
    this.x = 50;
    this.y = 50;
    this.radius = 25;
  }
  sprett(){
    this.x += Math.random()* 10 - 5;
    this.y += Math.random()* 10 - 5;
  }
  tegn(){
    circle(this.x,this.y,this.radius);
  }
}
let bobler = [];

for(let i = 0; i < 100; i += 1){
  bobler[i] = new Boble;
}
function setup() {
  // put setup code here
  createCanvas(400, 400);
}
function draw() {
  // put drawing code here
  background(220);
  for(let i = 0; i < bobler.length; i += 1){
    bobler[i].sprett();
    bobler[i].tegn();
  }
}
