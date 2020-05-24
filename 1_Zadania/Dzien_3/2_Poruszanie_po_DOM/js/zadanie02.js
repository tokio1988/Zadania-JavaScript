document.addEventListener("DOMContentLoaded", function(){

    function togglebox()
{
    //console.log("work");
    if(this.nextElementSibling.style.visibility ==="")
    {
        this.nextElementSibling.style.visibility ="hidden";
    }
    else
    {
        this.nextElementSibling.style.visibility ="";
    }
}


document.querySelectorAll(".button").forEach(element => {
    element.addEventListener("click", togglebox); 
});
})