var myTitle1 = document.getElementById("title1");

var myTitle2 = document.getElementById("title2");

var myList = document.getElementById("myList");

console.log(myTitle1.innerText);
console.log(myTitle2.innerText);
console.log(myList.innerText);


var myTitleex = document.getElementsByTagName("h1");
console.log(myTitleex[0].innerText);

var miniTitle = document.getElementsByClassName("minititle1")
console.log(miniTitle);
console.log(miniTitle[0].innerText);

var olList = document.querySelector("#myList #item1");
console.log(olList.innerText);

var olList2 = document.querySelector("#myList .item2");
console.log(olList2.innerText);

var olList3 = document.querySelector("ol #item3");
console.log(olList3.innerText);

var createElement = document.createElement("h3");
var bodyFrom = document.querySelector("body #title2");
var fatherElement = document.querySelector("#body1");

fatherElement.insertBefore(createElement, bodyFrom);


var newElement = document.createElement("p");
var bodyFrom2 = document.querySelector("body #title2");
var fatherElement2 = document.querySelector("#body1");
fatherElement2.insertBefore(newElement, bodyFrom2);

var newText = document.createTextNode("Aqui vai o texto!!!");
newElement.appendChild(newText);


var newElementLI = document.createElement("li");
var text1 = document.createTextNode("Pera");
newElementLI.appendChild(text1);
document.getElementById("myList").appendChild(newElementLI);

// outro metodo de adicionar!!

var newItem = document.createElement("li");
var text2 = document.createTextNode("Maçã");
newItem.appendChild(text2);

var item1 = document.getElementById("item1");
var father = item1.parentNode;
father.appendChild(newItem);

var btn1 = document.querySelector("#btn1");
// console.log(btn1);

var btn2 = document.querySelector("#btn2");
// console.log(btn2);

function test1() {
    console.log("clicou no botão!!!");
} 

btn1.addEventListener("click", test1);

var clickonMe = () => console.log("click to remove!!!");

btn2.addEventListener("click", () => {
    clickonMe()
    btn1.removeEventListener("click", test1)
});


