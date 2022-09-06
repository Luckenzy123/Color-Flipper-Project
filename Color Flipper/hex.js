let hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const txt = document.querySelector("span");
const body = document.body;

btn.onclick = function (){
    let hex = "#";
    for(let i = 0; i < 6; i++){
        hex += hexColors[randNum()];
    }
    
    body.style.backgroundColor = hex;
    txt.innerHTML = hex;
    txt.style.color = hex;
}

function randNum(){
    return Math.floor(Math.random() * hexColors.length);
}