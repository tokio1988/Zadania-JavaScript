document.addEventListener("DOMContentLoaded",function(){

    var btns = document.querySelectorAll(".deleteBtn");

btns.forEach(btn =>{
    btn.addEventListener("click", Remove)
})

function Remove()
{
    this.parentElement.parentElement.remove();
}
  
})
