const inpVare = document.querySelector("#inpVare")
const inpPris = document.querySelector("#inpPris")
const handlekurven = document.querySelector("#handlekurven")
const txtSum = document.querySelector("#txtSum")
const txtPris = document.querySelector("#txtPris")
const varer=[];//oppretter en tom array for varenavn
const priser=[];//oppretter en tom array for priser
const usortertePriser=[];// oppretter en tom hjelpe_array for priser
var sum =0;
const dyrest = () => {// et alternativ måte å finne største tallet
  priser.sort(function (a,b) {return b-a})//sorterer i synkende rekkefølge
  var element=priser[0];// velger det første verdien
  var indeks=usortertePriser.indexOf(element)//finner indeksen til det største tallet fra usortert array usortertePriser
txtPris.innerHTML= varer[indeks] + " for " + priser[0] + " kr";

}
const storst =() =>{ // finner det største tallet i arrayen priser
  var maks=priser[0];  //oppretter en hjelpevariabel som vi sammenligner med hvert av tallene i arrayen
  for (var i = 0; i<priser.length; i++){
    if (priser[i]>maks){maks=priser[i]} // hvis et tall er større enn variabelen, endrer vi variabelens verdi
  }
  var indeks=priser.indexOf(maks); // finner indeksen til det største tallet
  txtPris.innerHTML= varer[indeks] + " for " + maks + " kr"; // henter varenavnet fra arrayen
  //varer som har samme indeksen som det største tallet

}
const visHandleKurven = () => {
  handlekurven.innerHTML="" ;//Nullstiller innholdet
txtSum.innerHTML="";
sum =0;
for (var i = 0;i<varer.length;i++){//traverserer array, og skriver alle elementene i en liste

    handlekurven.innerHTML+=`
    <li> ${varer[i]}, kr ${priser[i]}
    </li>
    `
    sum += Number(priser[i]); // gjør om til number og legger sammen alle tallverdiene

}
txtSum.innerHTML="kr " +sum;
}
btn.onclick= () => { // når brukeren klikker på knappen legges innholdet fra input i to arrayer
  varer.push(inpVare.value);
  priser.push(inpPris.value)
  usortertePriser.push(inpPris.value);
  visHandleKurven(); // viser alle varene med prisen
//  dyrest();
storst();
  inpVare.value="" // tømmer inputfeltet
  inpPris.value="" // tømmer inputfeltet
}
