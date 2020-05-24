document.addEventListener("DOMContentLoaded",function(){

    var buttons = document.querySelectorAll(".button")
    

    for (var i = 0; i < buttons.length;i++)
    {
        //parents.push(buttons[i].parentElement)
        buttons[i].addEventListener("click",function(){
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.parentElement.style.backgroundColor = randomColor
        },true)
    }

   
})