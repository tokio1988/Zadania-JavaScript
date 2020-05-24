document.addEventListener("DOMContentLoaded",function(){
    
    var count = 0;
    var count1 = 0
    var form = document.querySelector("form");

    var AllChildrenOfForm = form.children

    function check()
    {
        if (AllChildrenOfForm[0].checked ==  true)
        {
            for(var i = 0; i < AllChildrenOfForm.length; i++)
            {
                AllChildrenOfForm[i].checked = true;
            }
            AllChildrenOfForm[AllChildrenOfForm.lengt-1] = false
            count = 18.30
            document.getElementById("price").innerText = count
        }
        else if (AllChildrenOfForm[1].checked ==  true)
        {
            count += 3,5
        }
    }

    
})