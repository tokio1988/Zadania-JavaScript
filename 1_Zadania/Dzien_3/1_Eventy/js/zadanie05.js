document.addEventListener("DOMContentLoaded",function(){
    var count = 0;
    var buttons = document.querySelectorAll("button");
    var counter = document.querySelector(".counter");

    for (var i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener("click",function(){
            count++;
            counter.innerHTML = count
        })
    }
})