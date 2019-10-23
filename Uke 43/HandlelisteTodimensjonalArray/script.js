const inpVare = document.querySelector("#inpVare")
const inpPris = document.querySelector("#inpPris")
const handlekurven = document.querySelector("#handlekurven")
const txtSum = document.querySelector("#txtSum")
const txtPris = document.querySelector("#txtPris")
var priser =[]; var varer =[];
const TodimArray=[varer,priser];// oppretter en tom todimensjonal array
var sum =0;

const storst =() =>{ // finner det største tallet i arrayen priser
  var maks=TodimArray[1][0];  //oppretter en hjelpevariabel som vi sammenligner med hvert av tallene i arrayen
  for (var i = 0; i<TodimArray[1].length; i++){
    if (TodimArray[1][i]>maks){maks=TodimArray[1][i]} // hvis et tall er større enn variabelen, endrer vi variabelens verdi
  }
  var indeks=TodimArray[1].indexOf(maks); // finner indeksen til det største tallet
  txtPris.innerHTML= TodimArray[0][indeks] + " for " + maks + " kr"; // henter varenavnet fra arrayen
  //varer som har samme indeksen som det største tallet

}
const visHandleKurven = () => {
  handlekurven.innerHTML="" ;//Nullstiller innholdet
txtSum.innerHTML="";
sum =0;
//for (var i = 0;i<TodimArray.length;i++){//traverserer array, og skriver alle elementene i en liste
  for (var j=0; j<TodimArray[0].length;j++){

    handlekurven.innerHTML+=`
    <li> ${TodimArray[0][j]}, kr ${TodimArray[1][j]}
    </li>
    `
    sum += Number(TodimArray[1][j]); // gjør om til number og legger sammen alle tallverdiene
}
//}
txtSum.innerHTML="kr " +sum;
}
btn.onclick= () => { // når brukeren klikker på knappen legges innholdet fra input i to arrayer

  priser.push(inpPris.value);
  varer.push(inpVare.value)
  TodimArray.push(varer,priser);
  visHandleKurven(); // viser alle varene med prisen
  storst();
  inpVare.value="" // tømmer inputfeltet
  inpPris.value="" // tømmer inputfeltet
}
