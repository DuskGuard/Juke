
let audio= new Audio();
const mybeta = document.getElementById("beta") ;
const myalpha = document.getElementById("alpha") ;

document.getElementById("playbtn").addEventListener("click", playAudio)
function playAudio(event) {
    audio.play(); 
}
document.getElementById("pausebtn").addEventListener("click", stopAudio)
function stopAudio(event) {
    audio.pause(); 
}

mybeta.addEventListener("change", changeTrack);
myalpha.addEventListener("change", changeTrack);
//Tracklist's Events
function changeTrack(event) {
    audio.pause();
    console.log(event.target.value) 
    var Striker = event.target.value;
    audio = document.getElementById(String(Striker));
    audio.play()
}

function target(event) {
    console.log(event.target)
}

let random = Math.floor(Math.random() * 10);
audio.id =document.getElementById("T"+random);
    

