// //1
// document.getElementById('container').style.textAlign = 'center';
// document.querySelector("img").style.width = "150px";
// document.querySelector("img").style.borderRadius = "50%";

// //2
// document.querySelector("img").setAttribute("src", "https://devsprouthosting.com/images/chicken.jpg");
// document.querySelector("img").setAttribute("alt", "chicken");

//3
// const ulLi = document.querySelector("ul");
// for (let i = 0; i < ulLi.children.length; i++) {
//     ulLi.children[i].classList.toggle("highlight");
// }

//4
// document.querySelector("span").innerText = "Disgusting"

//5
// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// const h1Spans = document.querySelector("h1");
// for (let i = 0; i < h1Spans.children.length; i++) {
//     h1Spans.children[i].style.backgroundColor = colors[i];
// }






//Guess numbers
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber);
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

displayMessage('Javascript is awesome');

const changeColor = function(){
    checkBtn.style.color = 'blue';
}

const checkBtn = document.querySelector('.check');
checkBtn.addEventListener('mouseover', changeColor);
checkBtn.addEventListener('mouseout', function(){
    checkBtn.style.color = 'grey';
});

document.querySelector('.check').addEventListener('click', function(){
    alert('You clicked on the button');
});

Element.addEventListener('click', function(){
    document.getElementById('demo').innerHTML = 'Hello World';
});

document.getElementById("a div id").addEventListener("click", displayMessage)


document.querySelector()