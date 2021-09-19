// Hier wird das ändern von Listenelementen geregelt

import React from "react";



//Das div welches hier gerendert wird, ist via Css 0 breit. Die Element drinne werden zum ändern des angewählten Elements genutzt
function List(){
    return(
        <div id="getNew">
            <input id="newtext" type="text"/> 
            <button onClick={changeOld}>Ändern</button>
            
        </div>
    );
}

//usedField beinhaltet das gewünschte Element, und nach dem Ändern wird das div wieder 0 breit.
function changeOld(){
    usedField.innerHTML=document.getElementById("newtext").value;
    document.getElementById("getNew").style.width="0";
}
let usedField;


//Beim Laden der Komponente wird folgernder Code ausgeführt:
    document.body.addEventListener('click',function() {
        //Nächster Kommentar wird von Angular erkannt und bewirkt, dass "event" benutzt werden kann
        // eslint-disable-next-line no-restricted-globals
        let x =event.clientX;
        // eslint-disable-next-line no-restricted-globals
        let y = event.clientY;
        let elm = document.elementFromPoint(x,y);
        //Wenn das Element unter dem Zeiger ein P-Tag ist, soll 0 breite Div größer gemacht werden.
            if(elm.tagName==="P"){
                document.getElementById("getNew").style.width="300px";
                usedField=elm;
            }
        
        },true)


export default List;