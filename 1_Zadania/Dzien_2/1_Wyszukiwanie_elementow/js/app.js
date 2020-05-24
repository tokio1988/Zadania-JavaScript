//Co oznaca poniższy kod dowiecie się w dalszej części modułu
document.addEventListener("DOMContentLoaded", function(){
    //zadanie 1
    //a - szuka klasy "first"
    var art = document.querySelectorAll(".first");
    //szuka tagu h2
    var header = document.querySelectorAll(".first h2").length
    //wyszukiwanie klasy offers w klasie first
    var offers = document.querySelectorAll(".first .offers");
    for (var i = 0; i < offers.length; i++)
    {
        console.log(offers[i])
    }
    //wyszukanie wszystkich div w tagu 
    var mydivs = document.querySelectorAll(".first div")
    for (var i = 0; i < mydivs.length; i++)
    {
        console.log(mydivs[i]);
    }

    //zadanie 2
    var exercise2 = document.querySelector("#exercise2");
    
    //zadanie 3 
    var home1 = document.querySelector("#home");
    var home2 = document.getElementById("home");

    var li1 = document.querySelector("li:not([data-direction])");
    var block = document.querySelector(".block");

    //zadanie 4
    var allLItag = document.querySelectorAll("nav ul li");
    var allParagraphs = document.querySelectorAll("div p");
    var allDivs = document.querySelectorAll("Article div");
});