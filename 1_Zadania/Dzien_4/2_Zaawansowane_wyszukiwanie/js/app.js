$(document).ready(function(){

    //zadanie1

    // zad 1
var span = $('[data-task="_task1"]');
console.log(span);

//zad 2

var span2 = $('[data-task = "_task2"]');
console.log(span2);

var shopping = span2.parent().prev();
console.log(shopping);

var div = shopping.children("div").eq(1);
console.log(div);

var elem = div.find("button");
console.log(elem);

var closet = elem.closest(".cart-item").addClass("cart-updated");
console.log(closet);

})