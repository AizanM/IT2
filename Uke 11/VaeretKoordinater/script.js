window.addEventListener("load",()=>{
  let long;
  let lat;
  let temperaturBeskrivelse=document.querySelector(".temperatur-beskrivelse");
  let temperaturGrader=document.querySelector(".temperatur-grader");
let lokasjonTimezone=document.querySelector(".lokasjon-timezone");
let ikon=document.querySelector(".ikon");
let temperaturSeksjon=document.querySelector(".temperatur-seksjon");
const temperaturSpan=document.querySelector(".temperatur-seksjon span")
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position);
      long=position.coords.longitude;
      lat=position.coords.latitude;
      const proxy="https://cors-anywhere.herokuapp.com/";
      const api=`${proxy}https://api.darksky.net/forecast/d5ac5d971e42eec83d1d4a25c8dcaf7f/${lat},${long}?lang=no`;
      fetch(api)
      .then(response=>{
        return response.json();
      })
      .then (data=>{
        const {temperature, summary, icon}=data.currently;
        temperaturGrader.textContent=temperature;
        temperaturBeskrivelse.textContent=summary;
        lokasjonTimezone.textContent=data.timezone;
        let celsius=(temperature-32)*(5/9);
        setIkon(icon,ikon);
        temperaturSeksjon.addEventListener("click", ()=>{
          if (temperaturSpan.textContent==="F"){
            temperaturSpan.textContent="C";
//temperaturGrader.textContent=celsius.toFixed(1);
temperaturGrader.textContent=Math.floor(celsius);
          }else{ temperaturSpan.textContent="F"
          temperaturGrader.textContent=temperature;

          }
        })
      });
    });
  }
  function setIkon(ikon, ikonID){
    const skycons=new Skycons({color:"white"});
    const nyikon=ikon.replace(/-/g,"_").toUpperCase();
    skycons.play();
    return skycons.set(ikonID,Skycons[nyikon]);

  }
});
