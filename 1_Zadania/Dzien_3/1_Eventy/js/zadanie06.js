document.addEventListener("DOMContentLoaded", function(){
    var divs = document.querySelectorAll(".box");
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    for (var i = 0; i < divs.length;i++)
    {
        
        divs[i].addEventListener("click",function(){
            this.style.backgroundColor = randomColor;
        })
    }
})