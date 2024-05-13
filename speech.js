import { handleResult } from "./handlers.js";
import {colorsByLength, isDark} from "./colors.js";


const button = document.querySelector("button");
const colorsEl = document.querySelector(".colors");

function displayColors(colors) {
    return colors.map(color=>
     `<span class="color ${color} ${isDark(color) ? 'dark' : ''}" 
     style="background: ${color}">
     ${color}</span>`)
     .join("");
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
function start() {
    // See if their browser supports this
    if(!("SpeechRecognition" in window)){
        console.log("Sorry your browser does not support speech reco.");
        return;
    }
    // it does work
    console.log("starting")
    // make a new speech reco
    const recognition = new SpeechRecognition();
    recognition.continous = true;   // This is weather or not it should continually look for
                                    // speach recognition or stop itself after it has recognized
    recognition.interimResults = true; // Givr us results as we are speaking
    recognition.onresult = handleResult;
    recognition.start();
    

}

button.addEventListener("click", ()=>{
    start();
    
})
colorsEl.innerHTML = displayColors(colorsByLength);