function moveOver()
{
    console.log("work");

    var list = this.querySelector(".list")
    list.firstElementChild.style.color = '#f00';
    list.lastElementChild.style.color = 'blue';
}
function moveLeave()
{

}

var divs = document.querySelectorAll(".listContainer")

divs.forEach(element =>{
    element.addEventListener("mouseover", moveOver);
    element.addEventListener("moveleave", moveLeave);
})