const inpNavn = document.querySelector("#navn");
const inpAntall = document.querySelector("#antall");
const txtSum = document.querySelector("#txtSum");
const  btn=document.querySelector("#btn");
var array=[];
btn.onclick= () =>{
  var objekt={
    navn: inpNavn.value,
    antall: inpAntall.value
  }
  array.push(objekt);
  txtSum.innerHTML=array;
}
