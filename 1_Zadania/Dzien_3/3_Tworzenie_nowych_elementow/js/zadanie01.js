document.addEventListener("DOMContentLoaded", function(){

    var orders = document.getElementById("orders");
    var button = document.getElementById("addBtn");
    button.addEventListener("click",add)


    function add()
    {
        var orderId = document.getElementById("orderId");
        var item = document.getElementById("item");
        var quantity = document.getElementById("quantity");
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");
        cell1.innerText = orderId.value;
        cell2.innerText = item.value;
        cell3.innerText = quantity.value;
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        orders.appendChild(row);

    }

    // var orders = document.getElementById("orders");

    // var row = document.createElement("tr");
    // var cell1 = document.createElement("td");
    // var cell2 = document.createElement("td");
    // var cell3 = document.createElement("td");
    // cell1.innerText = "Bankai";
    // cell2.innerText = "Zanka";
    // cell3.innerText = "No Tachi"

    // row.appendChild(cell1);
    // row.appendChild(cell2)
    // row.appendChild(cell3)
    // orders.appendChild(row)
    



})