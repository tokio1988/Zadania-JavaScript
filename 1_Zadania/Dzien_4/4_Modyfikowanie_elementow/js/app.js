$(document).ready(function(){

    $(document).ready(function(){
        var inputUser = $("#addUser");
        var inputAge = $("#age");
        var peopleList = $(".people ul.main");
        
        btn = $('.people input[type="submit"]')
    
        btn.on("click", function(){
            var newli = $("<li>", {
                text: inputUser.val(),
                "data-age": inputAge.val()
            })
    
            peopleList.append(newli);
            updateColors()
    
        })
    
        function updateColors() {
            $(".people ul.main li").each(function(k,v){
                var age = $(v).data("age");
    
                if(age <=15)
                    $(v).css("color","green");
                else if(age>15&&age<40)
                {
                    $(v).css("color","blue");
                }
                else
                {
                    $(v).css("color","brown");
                }
            })
    
        }
            var where = $(".where-i-am").find("div");
    
           var span1 = $("<span>", {
                text: "1.jestem tutaj append"
            })
            var span2 = $("<span>", {
                text: "2.append prepend"
            })
            var span3 = $("<span>", {
                text: "3.jestem tutaj before",
            })
            var span4 = $("<span>", {
                text: "4.jestem tutaj after"
            })
    
            where.append(span1);
            where.prepend(span2);
            where.before(span3);
            where.after(span4);
    
    })

})