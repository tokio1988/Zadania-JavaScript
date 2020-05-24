var CreditCardValidatior = {
    detecVendor: function(number)
    {
        if(number[0] == 4 && number.length >= 13 && number.length <= 16 )
        {
            return "Visa";
        }
        else if(number[0] == 5 && number.length == 16)
        {
            return "MasterCard";
        }
        else if(number[0] == 3 && (number[1]==4 || number[1]==7) && number.length == 15)
        {
            return "AE";
        }
        else
        {
            return "Unknow";
        }
    }
}

var card = document.querySelector("#card");
card.addEventListener("keyup", function(e)
{
    var result = CreditCardValidatior.detecVendor(this.value);
    document.querySelector("#type").innerText = result;
    console.log(card.value);
})