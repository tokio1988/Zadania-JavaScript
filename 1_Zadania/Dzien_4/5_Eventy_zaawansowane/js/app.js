$(document).ready(function(){
    var btn = $(".task_1");

    btn.on("click", function(){
        var div = $("<div>", {
            class: "panel"
        })

        btn.append(div);
        $(div).text("Tekst");
        $(div).css("font-size", "0")
    })

    btn.on("mouseover", "div", function()
    {
        $(this).css("font-size", "10px")
    })

})