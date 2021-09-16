// Eine Aufgabe

import React from "react";

function Task(){
    return(
        <div id = "CreateTask">
            <input id = "TextInput"></input>
            <button onClick = {addToList}>+</button>
            <div id ="Liste"></div>
        </div>
    );
}

function addToList(){
    let ListenElement = document.createElement("div");
    let InputWert = document.getElementById("TextInput").value;
    ListenElement.innerHTML = `<p>${InputWert}</p> <div onClick>Editieren</div> <button onClick = "(this) => {this.ParentElement.remove()}">Entfernen</button>`;
    document.getElementById("Liste").appendChild(ListenElement);
}




export default Task;