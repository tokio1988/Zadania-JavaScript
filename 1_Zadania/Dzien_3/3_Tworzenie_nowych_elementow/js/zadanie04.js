document.addEventListener("DOMContentLoaded", function(){

    var button = document.getElementById("remove")
    button.addEventListener("click",remove)

    function remove()
    {
        var allLis = document.querySelectorAll("li");
        for (var i = 0; i < allLis.length;i++)
        {
            allLis[i].parentElement.removeChild(allLis[i])
        }

    }

})