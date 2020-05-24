document.addEventListener("DOMContentLoaded",function(){

    var count = 0;
    var count1 = 1;

    var button = document.querySelector(".button")
    button.addEventListener("click",createEl)

    function createEl()
    {
        var menu = document.querySelector(".menu");
        var li = document.createElement("li");
        li.innerText = "Element <li>. Element: " + count1 + " W chwili dodania było: " + count;
        count++
        count1++
        menu.appendChild(li)
    }

})