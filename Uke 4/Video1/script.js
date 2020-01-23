//crossorigin="true"
//crossorigin="anonymous"
const divInfo=document.querySelector("#divInfo");
const ja=document.querySelector("#ja");
const nei=document.querySelector("#nei");
const minFilm=document.querySelector("#minFilm");
const btnPlay=document.querySelector("#btnPlay");
const btnPause=document.querySelector("#btnPause");
const btnMindreFart=document.querySelector("#btnHalvFart");
const btnMerFart=document.querySelector("#btnDobbelFart");
const btnStart=document.querySelector("#btnStart");
const btnFram=document.querySelector("#btnFram");
const btnSlutt=document.querySelector("#btnSlutt");
const volum=document.querySelector("#volum");
const volumIkon=document.querySelector("#volumIkon");
const tid=document.querySelector("#tid");
const btnVolum=document.querySelector("#btnVolum")
const mediaContainer=document.querySelector("#mediaContainer");
const glider=document.querySelector("#glider")
var lengde=0; var lengdeIgjen=0;

volum.onchange=()=>{
  minFilm.volume=volum.value/100;
  if (volum.value==0){
    volumIkon.innerHTML="&#xf6a9;"
  }else if(volum.value>0 & volum.value<50){
    volumIkon.innerHTML="&#xf027;"
  }
  else {
    volumIkon.innerHTML="&#xf028;"
  }
}
glider.oninput=()=>{
minFilm.currentTime=glider.value;
}

btnPlay.onclick=()=>{
minFilm.volume=volum.value/100;
glider.max=minFilm.duration;
minFilm.play();console.log(minFilm.playbackRate);
minFilm.currentTime=glider.value;
function beregn(){
glider.value=minFilm.currentTime;
lengdeIgjen=minFilm.currentTime;//avspillingstid
lengde=minFilm.duration;//lengde av videoen
lengdeIgjen=toTimeString(lengdeIgjen);
lengde=toTimeString(lengde);
tid.innerHTML=lengdeIgjen+ "/"+ lengde;
requestAnimationFrame(beregn);
}
requestAnimationFrame(beregn);
}

function toTimeString(seconds) {//viser tid i riktig format: h:m:s
return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
}
btnStart.onclick=()=>{
  minFilm.currentTime=0;
}
btnFram.onclick=()=>{
    minFilm.currentTime+=5;
}
btnSlutt.onclick=()=>{
    minFilm.currentTime=minFilm.duration-2;
}
btnPause.onclick=()=>{
  minFilm.pause();
}
btnMindreFart.onclick=()=>{
  minFilm.playbackRate=minFilm.playbackRate*1/1.1;
  console.log(minFilm.playbackRate)
}
btnMerFart.onclick=()=>{
  minFilm.playbackRate=minFilm.playbackRate*1.1;
  console.log(minFilm.playbackRate)
}
btnVolum.onmouseenter=()=>{
  volum.style.display="inline";
}
mediaContainer.onmouseleave=()=>{volum.style.display="none";}

minFilm.ontimeupdate=()=>{
  if(minFilm.currentTime>minFilm.duration/2 && minFilm.currentTime<minFilm.duration/2+1)
  {
    divInfo.style.display="block";
    minFilm.pause();
    minFilm.currentTime=minFilm.duration/2+1;
  }
}
ja.onclick=()=>{
  divInfo.style.display="none";
  minFilm.currentTime=minFilm.duration-2;}
  nei.onclick=()=>{
    divInfo.style.display="none";
  minFilm.play();}

function openFullscreen() {
  if (minFilm.requestFullscreen) {
    minFilm.requestFullscreen();
  } else if (minFilm.mozRequestFullScreen) { /* Firefox */
    minFilm.mozRequestFullScreen();
  } else if (minFilm.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    minFilm.webkitRequestFullscreen();
  } else if (minFilm.msRequestFullscreen) { /* IE/Edge */
    minFilm.msRequestFullscreen();
  }
}
