document.addEventListener("DOMContentLoaded",function(){

    var myDiv = document.getElementById("box");
    var globalX = document.getElementById("globalX");
    var globalY = document.getElementById("globalY");
    var localX = document.getElementById("localX");
    var localY = document.getElementById("localY");

    function showCoords(event)
    {
        globalX.innerText = event.clientX
        globalY.innerText = event.clientY;
        localX.innerText = event.screenX
        localY.innerText = event.screenY
    }

    myDiv.addEventListener("click",showCoords,false)
})