import { handleResult } from "./handlers.js";

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

start();