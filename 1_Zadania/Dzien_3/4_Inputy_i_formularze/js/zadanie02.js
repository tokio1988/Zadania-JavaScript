document.addEventListener("DOMContentLoaded", function(){

    var checkboxx = document.getElementById("invoice");
    
    checkboxx.addEventListener("change",(event) => {
        if(event.target.checked)
        {
            document.getElementById("invoiceData").style.visibility = "visible"
        }
        else
        {
            document.getElementById("invoiceData").style.visibility = "hidden"
        }
    })
    
    
    
})