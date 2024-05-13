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

}

start();