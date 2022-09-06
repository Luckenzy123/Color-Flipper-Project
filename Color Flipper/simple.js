let color = ["red", "green", "blue", "grey"];

const btn = document.getElementById("btn");
const txt = document.querySelector("span");
const body = document.body;

btn.onclick = function (){
    let randomNum = randNum();
    body.style.backgroundColor = color[randomNum];
    txt.innerHTML = color[randomNum];
    txt.style.color = color[randomNum];
}

function randNum(){
    return Math.floor(Math.random() * color.length);
}