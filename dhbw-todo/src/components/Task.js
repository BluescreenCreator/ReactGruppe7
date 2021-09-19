// Eine Aufgabe

import React from "react";

function Task(){
    return(
        <div>
        <h1>Ihre To-Do-Liste</h1>
        <div id = "CreateTask">
            <input id = "TextInput" type="text"></input>
            <button onClick = {addToList}>+</button>
            <button onClick = {ListeLoeschen}>Alles Fertig!</button>
            <div id ="Liste"></div>  
        </div>

        


        </div>
    );
}



// diese Funktion erzeugt neue Listenelemente/Aufgaben hierbei handelt es sich um einen p tag, welcher erzeugt wird.
// Zeile 34: in diesem Button hier befindet sich das onClick event, um eine Aufgabe zu loeschen.
function addToList(){
    let InputWert = document.getElementById("TextInput").value;
    let inner = document.createElement("div");
    inner.innerHTML= `<p>${InputWert}</p> <button onClick = "event.target.parentElement.remove()">Entfernen</button>`;
    document.getElementById("Liste").appendChild(inner);
}


// diese Funktioen loescht alle Aufgaben der Liste. Dies wird durch ueberschreiben der InnerHTML der gesamten Liste erreicht.
function ListeLoeschen(){
    let GesamteListe = document.getElementById("Liste");
    GesamteListe.innerHTML = ""; 
}


export default Task;