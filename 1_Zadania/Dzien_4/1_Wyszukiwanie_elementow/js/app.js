$(document).ready(function(){
    
    //zadanie 2
    console.log("Dom loaded")
    $(".main").find("li").addClass("borderClass");
    var showMore = $("showMore");
    $(".showMore").eq(0).css("color","red");

    //zadanie 3
    $(".main").find("li").addClass("colorText").addClass("backgroundElement").fadeOut("slow").fadeIn("slow");

    //zadanie 4
    //$("a").css("color","red")
    $(".menu").find("a").addClass("redLinks")
    $(".menu").find("a").eq(0).css("font-size",50)

    //zadanie 5
    if ($("h1").hasClass("creepyHeader"))
    {
        console.log("Element H1 posiada klasę creepyHeader")
    }
    else 
    {
        $("h1").addClass("creepyHeader")
    }

})