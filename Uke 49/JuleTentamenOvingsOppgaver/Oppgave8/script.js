var arrayMDG=["bilder/mdg01.jpg","bilder/mdg02.jpg","bilder/mdg03.jpg"]
var info=document.querySelector("#info");
var bildegalleri=document.querySelector("bildegalleri");
var arraySP=["bilder/sp01.jpg","bilder/sp02.jpg","bilder/sp03.jpg"]
var sp ={Navn: "SenterPartiet", Representanter: 19, Slagord: "Vi tror på hele Norge"};
var mdg ={Navn: "Miljøpartiet de grønne", Representanter: 1, Slagord: "Ta vare på fremtiden"};
var spEl=document.querySelector("#sp");
var mdgEl=document.querySelector("#mdg");
var framEl=document.querySelector("#fram");
var tilbakeEl=document.querySelector("#tilbake");
var bildegalleriEl=document.querySelector("#bildegalleri");

spEl.onclick=Vis;
mdgEl.onclick=Vis;
function Vis(evt) {
   info.innerHTML="";bildegalleriEl.innerHTML=""
   var trykket=evt.target;
   if (trykket.id==="sp"){
      for (var egenskap in sp) {
        info.innerHTML+=`<li> ${egenskap}: ${sp[egenskap]}</li>`
        }
        bildegalleriEl.innerHTML=`<img src="${arraySP[0]}">`
      var i =0;
      framEl.onclick= () => {
        if (i< arraySP.length-1 & i>=0)
          {i +=1;
          } else
            {i==i}
            bildegalleriEl.innerHTML=`<img src="${arraySP[i]}">`
          }
            tilbakeEl.onclick= () => {
              if (i>0)
                {i -=1;
                  } else
                    {i==i
                    }
                  bildegalleriEl.innerHTML=`<img src="${arraySP[i]}">`
              }
            }

          if (trykket.id==="mdg"){
             for (var egenskap in sp) {
               info.innerHTML+=`<li> ${egenskap}: ${mdg[egenskap]}</li>`
               }
               bildegalleriEl.innerHTML=`<img src="${arrayMDG[0]}">`
             var i =0;
             framEl.onclick= () => {
               if (i< arrayMDG.length-1 & i>=0)
                 {i +=1;
                 } else
                   {i==i}
                   bildegalleriEl.innerHTML=`<img src="${arrayMDG[i]}">`
                 }
                   tilbakeEl.onclick= () => {
                     if (i>0)
                       {i -=1;
                         } else
                           {i==i
                           }
                         bildegalleriEl.innerHTML=`<img src="${arrayMDG[i]}">`
                     }
                   }
                 }

/*
spEl.onclick= () => {
   info.innerHTML="";bildegalleriEl.innerHTML=""
   for (var egenskap in sp) {
     info.innerHTML+=`<li> ${egenskap}: ${sp[egenskap]}</li>`
  }
  bildegalleriEl.innerHTML=`<img src="${arraySP[0]}">`
  var i =0;
  framEl.onclick= () => {
     if (i< arraySP.length-1 & i>=0)
     {i +=1;
     } else
     {i==i}
     bildegalleriEl.innerHTML=`<img src="${arraySP[i]}">`
   }
   tilbakeEl.onclick= () => {
      if (i>0)
      {i -=1;
      } else
      {i==i}
      bildegalleriEl.innerHTML=`<img src="${arraySP[i]}">`
    }
 }
 mdgEl.onclick= () => {
    info.innerHTML="";
    bildegalleriEl.innerHTML=""
    for (var egenskap in mdg) {
      info.innerHTML+=`<li> ${egenskap}: ${mdg[egenskap]}</li>`
    }
    bildegalleriEl.innerHTML=`<img src="${arrayMDG[0]}">`

    var i =0;
    framEl.onclick= () => {
       if (i< arrayMDG.length-1 & i>=0)
       {i +=1;
       } else
       {i==i}
       bildegalleriEl.innerHTML=`<img src="${arrayMDG[i]}">`
     }
     tilbakeEl.onclick= () => {
        if (i>0)
        {i -=1;
        } else
        {i==i}
        bildegalleriEl.innerHTML=`<img src="${arrayMDG[i]}">`
      }
  }
*/
