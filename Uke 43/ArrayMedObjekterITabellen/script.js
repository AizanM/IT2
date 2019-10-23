var innpakningEl = document.querySelector(".innpakning"); // henter inn et div-element der vi skal plassere elever
var tabellEl=document.createElement("table");// lager et table-element
var tbodyEl= document.createElement("tbody");
const klasseliste =[
  {fornavn: "Sondre", etternavn: "Brandt", klasse: "2STD"},
  {fornavn: "Andreas", etternavn: "Larsen", klasse: "2STD"},
  {fornavn: "Magnus", etternavn: "Bråten", klasse: "3STD"},
  {fornavn: "Sara", etternavn: "Johnsrud", klasse: "3STE"}
];
// Lager en overskriftsrad
var overskrifter ="<tr>";
overskrifter +="<th> Fornavn</th>";
overskrifter +="<th> Etternavn</th>";
overskrifter +="<th> Klasse</th>";
overskrifter +="</tr>";
tbodyEl.innerHTML+=overskrifter; //legger til overskriftsraden i tabellen
const elevGrid = document.createElement("div");
klasseliste.sort(sorterEtternavn)//objektene blir sortert i arrayen etter fornavn
for(const elev of klasseliste){//går gjennom array og legger til en rad for hver elev
tbodyEl.innerHTML += `
<tr>
<td>${elev.fornavn}</td>
<td>${elev.etternavn}</td>
<td>${elev.klasse}</td>
</tr>
`;
};

tabellEl.appendChild(tbodyEl);// legger til tbody i tabellElementet
innpakningEl.appendChild(tabellEl);
function sorterEtternavn(a,b){
  if (a.Etternavn>b.Etternavn){
    return 1;
  } else if (a.Etternavn < b.Etternavn){
    return -1;
  } else {
    return 0;
  }
}
