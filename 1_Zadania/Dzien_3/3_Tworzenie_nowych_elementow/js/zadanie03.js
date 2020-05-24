var btn = document.querySelector("#remove");

btn.addEventListener("click", function()
{
    btn.parentElement.removeChild(btn);
})