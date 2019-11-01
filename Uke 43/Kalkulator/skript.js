var array=[7,8,9,"/",4,5,6,"X",3,2,1,"-",0,"*","=", "+"];
var innpakningEl = document.querySelector(".innpakning");
const kalkulatorGrid = document.createElement("div");
visKalkulator();
function visKalkulator(){
  for(var i =0; i<array.length;i++){//går gjennom array og legger innholdet i div-elementer
  kalkulatorGrid.innerHTML += `
  <div class="divknapp" >
  <p  class="knapp">${array[i]}</p>
  </div>
  `;
  }};
kalkulatorGrid.style.align="center";
  kalkulatorGrid.style.display = "grid";
  kalkulatorGrid.style.gridTemplateColumns= "1fr 1fr 1fr 1fr";
innpakningEl.appendChild(kalkulatorGrid);
var knappEl=document.querySelectorAll("knapp");
innpakningEl.addEventListener("click",beregn);
function beregn(){
  var knapper= knappEl.innerHTML;
console.log(knapper)}
