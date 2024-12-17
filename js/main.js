let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
let p=document.querySelectorAll("p");
let one=document.querySelector(".one");
let two=document.querySelector(".two");
let three=document.querySelector(".three");
let four=document.querySelector(".four");
let five=document.querySelector(".five");
let six=document.querySelector(".six");
let seven=document.querySelector(".seven");
let eight=document.querySelector(".eight");
let audio = new Audio("auido/spin.mp3");

btn.onclick = function () {
		audio.play();
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
}




function showParagraph(index) {
    p.forEach(paragraph => {
        paragraph.style.display = "none";
    });
    p[index].style.display = "block";
}


one.onclick = function() { showParagraph(0); };
two.onclick = function() { showParagraph(1); }; 
three.onclick = function() { showParagraph(2); }; 
four.onclick = function() { showParagraph(3); };
five.onclick = function() { showParagraph(4); }; 
six.onclick = function() { showParagraph(5); }; 
seven.onclick = function() { showParagraph(6); }; 
eight.onclick = function() { showParagraph(7); }; 



