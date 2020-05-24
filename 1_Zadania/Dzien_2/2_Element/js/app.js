/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".offers").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;


    //zadanie 1


    homeElement.id = "homeHeader";
    homeElement.className = "home";

    //zadanie 2 wyświetlenie elementów w consoli i iteracja po kolekcjach

    //zadanie 3 
    var blocks1 = document.querySelectorAll(".block a");
    for (var i = 0; i < blocks1.length; i++)
    {
        console.log(blocks1[i].innerHTML)
        console.log(blocks1[i].outerHTML)
    }

    for (var i = 0; i < blocks1.length; i++)
    {
        blocks1[i].innerHTML = "Nowa wartość diva o klasie blocks";
    }

    //zadanie 4
    homeElement.id

    //zadanie 5
    for (var i = 0; i < childElements.length; i++)
    {
        console.log(childElements[i].tagName)
    }

    //zadanie 6
    for (var i = 0; i < links.length;i++)
    {
        console.log(links[i].dataset)
    }

    //zadanie 7 
    console.log(banner.className)
    console.log(banner.classList)
});
