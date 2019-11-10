const inpTittel = document.querySelector("#filmTittel");
const inpAarstall = document.querySelector("#aarstall");
const oversikt = document.querySelector("#oversikt");
const btnSorter=document.querySelector("#btnSorter");
const btn=document.querySelector("#btn");
const Filmregister=[];//oppretter en tom array

class Film {
  constructor (filmTittel, aarstall){
    this.filmTittel=filmTittel;
    this.aarstall=aarstall;
  }
  get Liste(){
    return     `<li> ${this.filmTittel},  ${this.aarstall}
        </li>
        `
  }
}

const visOversikt = () => {// går gjennom arrayen og viser innholdet i en liste
  oversikt.innerHTML="" ;//Nullstiller innholdet
  for (var film of Filmregister){//traverserer array, og skriver alle elementene i en liste
    oversikt.innerHTML+=film.Liste;
  }
}
btn.addEventListener("click", Registrer);
function Registrer() { // når brukeren klikker på knappen opprettes et nytt objekt som legges i arrayen
  var nyfilm = new Film (inpTittel.value,inpAarstall.value);
  Filmregister.push(nyfilm);
  visOversikt(); // viser alle filmene
  inpTittel.value="" ;// tømmer inputfeltet
  inpAarstall.value="" ;// tømmer inputfeltet
}
btnSorter.addEventListener("click",SorterArray);
function SorterArray(){
  Filmregister.sort(sorterTittel);
  visOversikt();
}
function sorterTittel(a,b){
  if (a.filmTittel>b.filmTittel){
    return 1;
  } else if (a.filmTittel < b.filmTittel){
    return -1;
  } else {
    return 0;
  }
}
