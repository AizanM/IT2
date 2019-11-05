var array=['&#x221A;',7,8,9,"/",4,5,6,"*",3,2,1,"+",0,'=','C', "&minus;" ];
var innpakningEl = document.querySelector(".innpakning");
var felt = document.querySelector(".felt");
var rot = document.querySelector("#rot");
var minus = document.querySelector("#minus");
const kalkulatorGrid = document.createElement("div");
visKalkulator();
function visKalkulator(){
  for(var i =0; i<array.length;i++){//går gjennom array og legger innholdet i div-elementer
  kalkulatorGrid.innerHTML += `
  <div class="divknapp" >
  <button class="knapp" onclick="minFunksjon(this)">${array[i]}</button>
  </div>
  `;
  }};
kalkulatorGrid.style.align="center";
  kalkulatorGrid.style.display = "grid";
  kalkulatorGrid.style.gridTemplateColumns= "1fr 1fr 1fr 1fr";
innpakningEl.appendChild(kalkulatorGrid);
var verdi=0;var tall1=""; var tall2=""; var nyarray=[];
felt.innerHTML="";
var rottegn=rot.innerHTML;
var minustegn=minus.innerHTML;

function minFunksjon(elmt){
  felt.innerHTML+=elmt.innerHTML;
  nyarray.push((elmt.innerHTML));
  console.log("elmt innerhtml " + elmt.innerHTML);
console.log("indeks er " + nyarray.indexOf(elmt.innerHTML))

  if (elmt.innerHTML==="C"){felt.innerHTML=""; nyarray=[];  }//slette-tasten er trykket på
  if (elmt.innerHTML==="=") {

    //tasten viser gangetegnet
    if (nyarray.indexOf("*")>0){//
        var indeks=nyarray.indexOf("*");
        for (var i=0; i<indeks;i++){tall1+=nyarray[i];}
        for (var i=indeks+1; i<nyarray.length-1;i++){  tall2+=nyarray[i];}
        verdi=Number(tall1)*Number(tall2);
        tall1="", tall2="";
        felt.innerHTML+=verdi;
    }
    //tasten viser summasjonstegnet
    if (nyarray.indexOf("+")>0){//
        var indeks=nyarray.indexOf("+");
        for (var i=0; i<indeks;i++){tall1+=nyarray[i];}
        for (var i=indeks+1; i<nyarray.length-1;i++){  tall2+=nyarray[i];}
        verdi=Number(tall1)+Number(tall2);tall1="", tall2="";
        felt.innerHTML+=verdi;
    }
    //tasten viser subtaksjonstegnet
    if (nyarray.indexOf(minustegn)>0){//
        var indeks=nyarray.indexOf(minustegn);
        for (var i=0; i<indeks;i++){tall1+=nyarray[i];}
        for (var i=indeks+1; i<nyarray.length-1;i++){  tall2+=nyarray[i];}
        verdi=Number(tall1)-Number(tall2);tall1="", tall2="";
        felt.innerHTML+=verdi;
    }

    //tasten viser rottegnet
    if (nyarray.indexOf(rottegn)==0){//
        var indeks=nyarray.indexOf(rottegn);
        for (var i=1; i<nyarray.length-1;i++){tall1+=nyarray[i];}

        verdi=Math.sqrt(Number(tall1));
        tall1="";
        felt.innerHTML+=verdi;
    }
    //tasten viser divisjonstegnet
    if (nyarray.indexOf("/")>0){//
        var indeks=nyarray.indexOf("/");
        for (var i=0; i<indeks;i++){tall1+=nyarray[i];}
        for (var i=indeks+1; i<nyarray.length-1;i++){  tall2+=nyarray[i];}
        if (Number(tall2)==0){felt.innerHTML="Kan ikke dele på null "; felt.style.spacing="0px"; tall1="";tall2="";} else {
        verdi=Number(tall1)/Number(tall2);tall1="", tall2="";
        felt.innerHTML+=verdi;
    }}console.log(nyarray)
  }
}
