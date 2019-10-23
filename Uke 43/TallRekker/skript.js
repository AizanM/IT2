const inpTall=document.querySelector("#inpTall");
const tallRekke=document.querySelector("#tallRekke");
const sortertRekke=document.querySelector("#sortertRekke");
const btn=document.querySelector("#btn");
const rekke=[];// oppretter en tom array for å legge inn tall
const visTall = () => {
tallRekke.innerHTML="" //Nullstiller innholdet
for (var tall of rekke){// går gjennom alle elementene i arrayen og viser disse i en liste
  tallRekke.innerHTML+=`
  <li> ${tall},
  </li>
  `
}
}
inpTall.onchange = () => { // når brukeren endrer innholder i inputfeltet kalles funksjonen opp
rekke.push(inpTall.value);// legger verdiene i arrayen
visTall();
inpTall.value="";//nullstiller innholdet
}
btn.onclick= () => {// når brukeren trykker på knappen kjøres funksjonen som kaller en metode som sorterer elementene
  sortertRekke.innerHTML="";//  i arrayen og innholdet vises på skjermen
  rekke.sort(function (a,b) {return a-b})
  for (var tall of rekke) {
    sortertRekke.innerHTML+=`
    <li> ${tall},</li>

    `}

}
