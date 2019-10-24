var innpakningEl = document.querySelector(".innpakning"); // henter inn et div-element der vi skal plassere elever

const klasseliste =[
  {fornavn: "Sondre", etternavn: "Brandt", klasse: "2STD"},
  {fornavn: "Andreas", etternavn: "Larsen", klasse: "2STD"},
  {fornavn: "Magnus", etternavn: "Bråten", klasse: "3STD"},
  {fornavn: "Sara", etternavn: "Johnsrud", klasse: "3STE"}
];

const elevGrid = document.createElement("div");
klasseliste.sort(sorterFornavn)//objektene blir sortert i arrayen etter fornavn
for(const elev of klasseliste){//går gjennom array og legger innholdet i div-elementer
elevGrid.innerHTML += `
<div class="elev">
<p>${elev.fornavn}</p>
<p>${elev.etternavn}</p>
<p>${elev.klasse}</p>
</div>
`;
};
elevGrid.style.display = "grid";
elevGrid.style.gridTemplateColumns= "1fr 1fr 1fr 1fr";
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
