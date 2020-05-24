/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    

    //zadanie 1
    var dataDirection = document.querySelectorAll("li:not([data-direction])")
    for (var i = 0; i < dataDirection.length; i++)
    {
        console.log(dataDirection[i].setAttribute("data-direction", "up"))

        if (i % 2 ==0)
        {
            dataDirection[i].style.backgroundColor = "blue";
        }

        if (i % 3 == 0)
        {
            dataDirection[i].style.textDecoration = "underline"
        }

        if (i % 5 == 0)
        {
            dataDirection[i].classList.add("big")
        }
    }

    //zadanie 2

    var options = document.querySelectorAll("option");
    for (var i = 0; i < options.length; i++)
    {
        options[i].innerText = options[i].value
        //options[i].dataset.year = options[i].innerText + 20
    }

    for (var i = 0; i < options.length; i++)
    {
        var year = parseInt(options[i].innerText,10)
        options[i].dataset.year = year + 20
    }

    //zadanie 3
    //Rozwiązanie pobrane od wykładowcy
    var firefox = document.querySelector(".firefox");
    var edge = document.querySelector(".edge");
    var chrome = document.querySelector(".chrome");

    chrome.style.width = "100px";
    chrome.style.backgroundRepeat = "no-repeat";

    edge.style.backgroundImage = "url('assets/img/edge.png')";
    firefox.style.backgroundImage = "url('assets/img/firefox.png')";

    edge.nextElementSibling.innerText = "edge";
    edge.nextElementSibling.setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");
    firefox.nextElementSibling.innerText = "firefox";
    firefox.nextElementSibling.setAttribute("href", "https://www.mozilla.org/pl/firefox/new/" );
    chrome.nextElementSibling.innerText = "chrome";

    //zadanie 4
    var spanName = document.getElementById("name")
    spanName.innerText = "Łukasz Toczek";
    var spanColor = document.getElementById("fav_color");
    spanColor.innerText = "Blue";
    var spanMeal = document.getElementById("fav_meal");
    spanMeal.innerText = "Spagetti";

    //zadanie 5

    var UL = document.querySelector(".exercise.ex5 ul");
    UL.classList.add("menu");
    
    var li = document.querySelectorAll(".exercise.ex5 ul li")
    for (var i = 0; i < li.length; i++)
    {
        li[i].classList.add("menuElement")
    }

    li[0].classList.remove("error")

    //zadanie 6
    var count = 0
    var Li2 = document.querySelectorAll(".exercise.ex6 ul li")
    // for (var i = 2; i < Li2.length; i++)
    // {
    //     if (Li2[0])
    //     {
    //         Li2[0].dataset.id = 1
    //     }
    //     else 
    //     {
    //         Li2[i].dataset.id = i
    //     }
    //     Li2[i].dataset.id = i
    // }

    // for (var i = 1; i < Li2.length; i++)
    // {
    //     console.log(Li2[i].dataset.id)
    // }


    for (var i = 0; i < Li2.length;i++)
    {
        Li2[i].dataset.id = i + 1
    }

    Li2[0].dataset.id = 1
    Li2[1].dataset.id = 2
    Li2[2].dataset.id = 3
    Li2[3].dataset.id = 4

});
