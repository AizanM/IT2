var innpakningEl = document.querySelector(".innpakning"); // henter inn et div-element der vi skal plassere elever

const klasseliste =[
  {fornavn: "Sondre", etternavn: "Brandt", klasse: "2STG"},
  {fornavn: "Andreas", etternavn: "Larsen", klasse: "3STE"},
  {fornavn: "Magnus", etternavn: "Bråten", klasse: "3STE"},
  {fornavn: "Sara", etternavn: "Johnsrud", klasse: "3STE"},
  {fornavn: "Casper", etternavn: "Amtrup", klasse: "3STD"},
  {fornavn: "Alexander", etternavn: "Auerdal", klasse: "3STE"},
  {fornavn: "Christoffer", etternavn: "Bogstad", klasse: "3MKA"},
  {fornavn: "Fredrik", etternavn: "Grenan", klasse: "3STF"},
  {fornavn: "Tobias", etternavn: "Gudbjerg", klasse: "3STE"},

];

const elevGrid = document.createElement("div");
const btnFornavn=document.querySelector("#btnFornavn")
const btnEtternavn=document.querySelector("#btnEtternavn");
VisElevene();
btnFornavn.onclick= () => {
  elevGrid.innerHTML ="";
  klasseliste.sort(sorterFornavn);
  VisElevene()}//objektene blir sortert i arrayen etter fornavn
btnEtternavn.onclick= () => {
elevGrid.innerHTML ="";
klasseliste.sort(sorterEtternavn); VisElevene()}//objektene blir sortert i arrayen etter etternavn}
function VisElevene(){
for(const elev of klasseliste){//går gjennom array og legger innholdet i div-elementer
elevGrid.innerHTML += `
<div class="elev" >
<p>${elev.fornavn}</p>
<p>${elev.etternavn}</p>
<p>${elev.klasse}</p>
</div>
`;
}};
elevGrid.style.align="center";
elevGrid.style.display = "grid";
elevGrid.style.gridTemplateColumns= "1fr 1fr 1fr";
//document.body.innerHTML = "";
//document.body.appendChild(elevGrid);
innpakningEl.appendChild(elevGrid);
function sorterFornavn(a,b){
  if (a.fornavn>b.fornavn){
    return 1;
  } else if (a.fornavn < b.fornavn){
    return -1;
  } else {
    return 0;
  }
}

function sorterEtternavn(a,b){
  if (a.etternavn>b.etternavn){
    return 1;
  } else if (a.etternavn < b.etternavn){
    return -1;
  } else {
    return 0;
  }
}
