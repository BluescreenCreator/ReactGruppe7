// Eine Aufgabe

import React from "react";

function Task(){
    return(
        <div>
        <div id = "CreateTask">
            <input id = "TextInput"></input>
            <button onClick = {addToList}>+</button>
            <button onClick = {ListeLoeschen}>Alles Fertig!</button>
            <div id ="Liste"></div>
            <button id = "invis" onclick = {loeschen}></button>    
        </div>

        


        </div>
    );
}

function loeschen() {
    Event.ParentElement.remove();
}

function addToList(){
    let InputWert = document.getElementById("TextInput").value;
    let inner = document.createElement("div");
    inner.innerHTML= `<p>${InputWert}</p> <div onClick>Editieren</div> <button onClick = "event.target.parentElement.remove()">Entfernen</button>`;
    document.getElementById("Liste").appendChild(inner);
}


// diese Funktioen loescht alle Aufgaben der Liste. Dies wird durch ueberschreiben der InnerHTML der gesamten Liste erreicht.
function ListeLoeschen(){
    let GesamteListe = document.getElementById("Liste");
    GesamteListe.innerHTML = ""; 
}


export default Task;