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
