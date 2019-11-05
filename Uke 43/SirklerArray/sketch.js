function setup() {
  // put setup code here
  createCanvas(400, 400);

}
var array=[]
function tilfeldig (){
var tall=Math.floor(Math.random()*100+50);
return tall;
}
var lengde=7;
while (array.length<lengde){
  var tilfeldigtall=tilfeldig();
  if (array.indexOf(tilfeldigtall)<0){
    array.push(tilfeldigtall);
  }
}
console.log(array);
var maks=0;
function storst(){
  var maks=array[0];  //oppretter en hjelpevariabel som vi sammenligner med hvert tall i arrayen
  for (var i = 0; i<array.length; i++){
    if (array[i]>maks){
      maks=array[i];
    }
  }return maks;
}// hvis et tall er større enn variabelen, endrer vi variabelens verdi
maks=storst();
document.write(maks)


function draw() {
  // put drawing code here
  background(220);
circle(width/2,height/2,maks);


}
