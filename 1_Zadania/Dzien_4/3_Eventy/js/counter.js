$(document).ready(function(){

    var textArea = document.createElement("textarea");
    textArea.setAttribute("id","textArea")
    var form = $("form").append(textArea)

    var currentText = textArea.value;
    var count = currentText.length

    if (count >= 0 && count <=33)
    {
        $("#textArea").on("keyup",function(){})
        
    }
    else if (count >= 34 && count <= 66)
    {
        $("#textArea").css("color","yellow")
    }

})