document.addEventListener("DOMContentLoaded", function(){
    
    var count1 = 0;
    var count2 = 0; 
    var count3 = 0;

    var btn1 = document.getElementById("button1");
    var btn2 = document.getElementById("button2");
    var btn3 = document.getElementById("button3");


    var counters = document.querySelectorAll(".counter");

    btn1.addEventListener("click",function(){
        count1++
        counters[0].innerHTML = count1
    },false)

    btn2.addEventListener("click",function(){
        count2++
        counters[1].innerHTML = count2
    },false)
    
    btn3.addEventListener("click",function(){
        count3++
        counters[2].innerHTML = count3
    },false)
})