const inpVare = document.querySelector("#inpVare")
const inpPris = document.querySelector("#inpPris")
const handlekurven = document.querySelector("#handlekurven")
const txtSum = document.querySelector("#txtSum")
const txtPris = document.querySelector("#txtPris")
const varer=[];//oppretter en tom array for varenavn
var sum =0;
class Vare {
  constructor (varenavn, pris){
    this.varenavn=varenavn;
    this.pris=pris;
  }
  get Liste(){
    return     `<li> ${this.varenavn}, kr ${this.pris}
        </li>
        `
  }
  get Pris(){
    return this.pris;
  }
}

const visHandleKurven = () => {
  handlekurven.innerHTML="" ;//Nullstiller innholdet
  txtSum.innerHTML="";sum =0;
  for (var vare of varer){//traverserer array, og skriver alle elementene i en liste
    handlekurven.innerHTML+=vare.Liste;
    sum += Number(vare.Pris); // gjør om til number og summerer prisene
}
txtSum.innerHTML="kr " +sum; //summen vises
}
btn.onclick= () => { // når brukeren klikker på knappen opprettes et nytt objekt som legges i arrayen
  var nyvare = new Vare (inpVare.value,inpPris.value);
  varer.push(nyvare);
  visHandleKurven(); // viser alle varene med prisen
dyrest();
//storst();
  inpVare.value="" ;// tømmer inputfeltet
  inpPris.value="" ;// tømmer inputfeltet
}
function dyrest(){
varer.sort(function(a,b){
  return b.pris-a.pris;
})
txtPris.innerHTML=varer[0].varenavn + " kr "+ varer[0].pris;
}
