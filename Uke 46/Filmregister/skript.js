const inpTittel = document.querySelector("#filmTittel");
const inpAarstall = document.querySelector("#aarstall");
const inpDato = document.querySelector("#dato");
const inpGrense = document.querySelector("#grense");
const inpOscarJa = document.querySelector("#oscarJa");
const inpOscarNei = document.querySelector("#oscarNei");
const kino = document.querySelector("#kino");
const dvd = document.querySelector("#dvd");
const tv = document.querySelector("#tv");
const strtj = document.querySelector("#strtj");
const oversikt = document.querySelector("#oversikt");
const btnSorter=document.querySelector("#btnSorter");
const btn=document.querySelector("#btn");
const Filmregister=[];//oppretter en tom array

class Film {
  constructor (filmTittel, aarstall, dato,format, grense, oscar){
    this.filmTittel=filmTittel;
    this.aarstall=aarstall;
    this.dato=dato;
    this.format=format;
    this.grense=grense;
    this.oscar=oscar;
  }
  get Liste(){
    return     `<tr>
              <td>${this.filmTittel}</td>
              <td>${this.aarstall}</td>
              <td>${this.dato}</td>
              <td>${this.format}</td>
              <td>${this.grense}</td>
              <td>${this.oscar}</td>
              </tr>`
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
  var format=""; var oscar ="";
  if (kino.checked){format+= "Kino "
  }
  if (tv.checked){format+= " TV "
  }
  if (strtj.checked){format+= " Strømmetjeneste "
  }
  if (dvd.checked){format+= " DVD"
  }
  if (inpOscarJa.checked){oscar= "Ja";}
  else {oscar = "Nei"}

  var nyfilm = new Film (inpTittel.value,inpAarstall.value,inpDato.value, format, inpGrense.value, oscar);
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
