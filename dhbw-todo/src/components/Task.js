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

function loeschen(event) {
    event.target.ParentElement.remove();
}

function addToList(){
    let ListenElement = document.createElement("div");
    let InputWert = document.getElementById("TextInput").value;
    ListenElement.innerHTML = `<p>${InputWert}</p> <div onClick>Editieren</div> <button onClick = "function loeschen()">Entfernen</button>`;
    document.getElementById("Liste").appendChild(ListenElement);
}


// diese Funktioen loescht alle Aufgaben der Liste. Dies wird durch ueberschreiben der InnerHTML der gesamten Liste erreicht.
function ListeLoeschen(){
    let GesamteListe = document.getElementById("Liste");
    GesamteListe.innerHTML = ""; 
}


export default Task;