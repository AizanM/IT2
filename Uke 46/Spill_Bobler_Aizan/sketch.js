function setup() {
  // put setup code here
  createCanvas(600, 600);

//spiller=new Boble(100,100,15,"green");
spiller=new Boble(100,100,15,"red");
for (var i=1; i<=antall;i++){
  boble =new Boble(200,100,15,`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`);
  array.push(boble)
}
}
let boble;let spiller;let avstand;
var array=[]; const antall= 30;

function draw() {
  // put drawing code here
  background(220);
   spiller.tegn();
    spiller.flytt();
  for (var boble of array) {
boble.tegn();
boble.flytt();
avstand=int(dist(boble.x,boble.y,spiller.x,spiller.y));
if (avstand<=boble.r+spiller.r){
var i =array.indexOf(boble);
  array.splice(i,1);
  spiller.r+=2;
}
}
document.onkeydown=function(evt){
  var tallkode=evt.keyCode;
  console.log(tallkode)//viser tallkoden til tastene på tastaturen
  if (tallkode===37){
    this.x+=-5;
  }
  if (tallkode===39){
    this.x+=5;
  }
  if (tallkode===38){
    this.y+=-5;
  }
  if (tallkode===40){
    this.y+=5;
  }
}
}
