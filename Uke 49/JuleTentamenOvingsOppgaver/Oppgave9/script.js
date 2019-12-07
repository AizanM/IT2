var arrayGranboBilder=["bilder/granbo01.jpg","bilder/granbo02.jpg","bilder/granbo03.jpg"]
var info=document.querySelector("#info");
var bildegalleri=document.querySelector("bildegalleri");
var arrayGranstuaBilder=["bilder/granstua01.jpg","bilder/granstua02.jpg","bilder/granstua03.jpg"]
var granbo ={Hytte: "Granbo", Sengeplasser: 6, Standard: "Middels", Badstue: "Nei", Ukepris: 15000};
var granstua ={Hytte: "Granstua", Sengeplasser: 4, Standard: "Høy", Badstue: "Ja", Ukepris: 12000};
var granboEl=document.querySelector("#granbo");
var granstuaEl=document.querySelector("#granstua");
var framEl=document.querySelector("#fram");
var tilbakeEl=document.querySelector("#tilbake");
var bildegalleriEl=document.querySelector("#bildegalleri");
bildegalleriEl.innerHTML=`<img src="${arrayGranboBilder[0]}">`
granboEl.onclick=Vis;
granstuaEl.onclick=Vis;
VisGranbo();

function Vis(evt) {
   info.innerHTML="";bildegalleriEl.innerHTML=""
   var trykket=evt.target;
   if (trykket.id==="granbo"){
     VisGranbo();
            }

          if (trykket.id==="granstua"){
            VisGranstua();
                   }
                 }
function VisGranbo(){
  for (var egenskap in granbo) {
    info.innerHTML+=`<li> ${egenskap}: ${granbo[egenskap]}</li>`
    }
    bildegalleriEl.innerHTML=`<img src="${arrayGranboBilder[0]}">`
  var i =0;
  framEl.onclick= () => {
    if (i< arrayGranboBilder.length-1 & i>=0)
      {i +=1;
      } else
        {i==i}
        bildegalleriEl.innerHTML=`<img src="${arrayGranboBilder[i]}">`
      }
        tilbakeEl.onclick= () => {
          if (i>0)
            {i -=1;
              } else
                {i==i
                }
              bildegalleriEl.innerHTML=`<img src="${arrayGranboBilder[i]}">`
          }
}
function VisGranstua(){
  for (var egenskap in granstua) {
    info.innerHTML+=`<li> ${egenskap}: ${granstua[egenskap]}</li>`
    }
    bildegalleriEl.innerHTML=`<img src="${arrayGranstuaBilder[0]}">`
  var i =0;
  framEl.onclick= () => {
    if (i< arrayGranstuaBilder.length-1 & i>=0)
      {i +=1;
      } else
        {i==i}
        bildegalleriEl.innerHTML=`<img src="${arrayGranstuaBilder[i]}">`
      }
        tilbakeEl.onclick= () => {
          if (i>0)
            {i -=1;
              } else
                {i==i
                }
              bildegalleriEl.innerHTML=`<img src="${arrayGranstuaBilder[i]}">`
          }
}
