document.addEventListener("DOMContentLoaded",function(){
    //zadanie 1
    var first = document.querySelector(".first")
    var allChildrenOfFirst = first.children
    var firstbornOfFirst = allChildrenOfFirst[0]
    var allChildrenOfFirstBorn = firstbornOfFirst.children
    var thirdChildOfFirstBorn = allChildrenOfFirstBorn[2]
    
    
    var second = document.querySelector("#second").parentElement.children[3];
    console.log(second);

    var thirdChildren = document.querySelector("[data-ex = 'third']").parentElement.parentElement.lastElementChild.firstElementChild.children;
    var third = thirdChildren[(Math.ceil(thirdChildren.length/2) - 1)];
    console.log(third);

    var fourthAll = document.querySelector("div.fourth").parentElement.querySelector("article").querySelectorAll("p")
    var fourth = fourthAll[1];
    console.log(fourth);
})