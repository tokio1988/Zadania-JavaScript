document.addEventListener("DOMContentLoaded", function(){


    
    var parentOfButtons = document.getElementById("bubblingButtons")
    

    parentOfButtons.addEventListener("click",function(){
        console.log("Event wywołany po kliknięciu, element #bubblingButtons");
    });

   

    var count = 0;
    var buttons = document.querySelectorAll("button")
    for (var i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener("click", function(){
            count++;
            this.dataset.counter = count
            console.log("Wyświetla ile razy przycisk wciśnięty: " + count)
        },false)
    }

});