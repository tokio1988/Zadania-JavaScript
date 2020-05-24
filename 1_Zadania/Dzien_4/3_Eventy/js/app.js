$(document).ready(function(){
    //zadanie 1
    var ironMan = $(".ironMan-btn");
    var thor = $(".thor-btn");
    var wolverine = $(".wolverine-btn");

    ironMan.on("click",function(){
        console.log("Kliknięto przycisk Iron Mena !!");
    })

    thor.one("click", function(){
        console.log("kliknięto mnie, ale już drugi raz nie dam się kliknąć");
    })

    wolverine.on("click", function(){
        $(".ironMan-btn").off("click")
        $(".thor-btn").off("click")
    })

    //zadanie 3

    var superHereos = $(".superhero-description").find("dd")
    superHereos.hide();

    $("#IronMan").on("click",function(){
        $("#IronMan").next().show();
    })

    $("#Thor").on("click",function(){
        $("#Thor").next().show();
    })

    $("#Wolverine").on("click",function(){
        $("#Wolverine").next().show();
    })

    $("#IronMan").on("mouseenter",function(){
        $("#IronMan").next().hide();
    })

    $("#Thor").on("mouseenter",function(){
        $("#Thor").next().hide();
    })

    $("#Wolverine").on("mouseenter",function(){
        $("#Wolverine").next().hide();
    })

    //zadanie 4

    var btn = $(".show-hide-btn");
    var input = $(".user-pass")

    btn.on("click", function(e){

        if(input.attr("type") == "password")
            input.attr("type", "text");
        else
        input.attr("type", "password");

        e.preventDefault();
    })

    //zadanie 5

    var menu = $(".menu")
    menu.on("mouseenter",function(){
        console.log("Hura");
    })
    
    //zadanie 6

    var userNameField = $(".user-name")

    userNameField.on("click",function(){
        $(".user-name").css("background-color","red")
    })
    userNameField.on("mouseleave",function(){
        $(".user-name").css("background-color","yellow")
    })

});