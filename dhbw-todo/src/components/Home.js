// Home-Bildschirm mit Begruessung

// wir Rendern einen Homescreen, mit klick auf den Button verschwindet dieser. Das Passiert ueber die Funktion "weiter", diese veraendert die css-eigenschaften.

import React from "react";
function Home(){
    return(
        <div id = "Homescreen">
            <h1>Herzlich willkommen zur ToDo-Liste!</h1>
            <button onClick = {weiter}>Let's get Started</button>

        </div>
    );
}

function weiter(){
    document.getElementById("Homescreen").style.width=0;
}

export default Home;