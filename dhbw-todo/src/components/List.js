// Eine Aufgabe

import React from "react";

function List(){
    return(
        <div id="getNew">
       
            <input id="newtext" type="text"/>
            <button onClick={changeOld}>Ändern</button>
        </div>
    );
}

function changeOld(){
    usedField.innerHTML=document.getElementById("newtext").value;
    document.getElementById("getNew").style.width="0";
}
let usedField;

    document.body.addEventListener('click',function() {
        // eslint-disable-next-line no-restricted-globals
        let x =event.clientX, y = event.clientY, elm = document.elementFromPoint(x,y);
            if(elm.tagName==="P"){
                document.getElementById("getNew").style.width="100px";
                usedField=elm;
            }
        
        },true)


export default List;