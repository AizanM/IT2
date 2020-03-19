let divBeskrivelse=document.querySelector(".temperatur-beskrivelse");
let divGrader=document.querySelector(".temperatur-grader");
let byNavn=document.querySelector(".byNavn");
let ikon=document.querySelector(".ikon");
let by=document.querySelector("#by")
let btn=document.querySelector("#btn")
btn.onclick=Vis;
document.onclick=Vis;
function Vis(){
      const proxy="https://cors-anywhere.herokuapp.com/";
      const api=`${proxy}https://api.openweathermap.org/data/2.5/weather?q=${by.value}&appid=262cd39a409c912c253a43810d3b2d48&lang=no&units=metric`;
      fetch(api)
      .then(response=>{
        return response.json();
      })
      .then (data=>{
        const beskrivelse=data.weather[0].description;
        divGrader.textContent=Math.floor(data.main.temp)+" C";
        divBeskrivelse.textContent=beskrivelse;
        byNavn.textContent="By:  "+data.name;
        const ikID=data.weather[0].icon;
        ikon.src=`http://openweathermap.org/img/wn/${ikID}@2x.png`;
        console.log(ikID)
      });
    };
