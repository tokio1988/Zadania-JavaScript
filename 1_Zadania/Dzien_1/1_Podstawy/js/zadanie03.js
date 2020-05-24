var numb = 10;
var float = 10.5;
var str = "Bankai Zanka No Tachi";
var char = "A";
var tab = [1,2,3];
var tru = false;

console.log("Typy i wartości dodowwania różnych typow do number")
console.log(numb + float + "typ number") //typ number;
console.log(numb + str + "typ string => 10,5Bankai Zanka No Tachi") // typ string => 10,5Bankai Zanka No Tachi
console.log(numb + str + "typ string 10,5A")// typ string 10,5A
console.log(numb + tab + "typ tablicowy, długość tablicy zwiększy się o wartość numb")// typ tablicowy, długość tablicy zwiększy się o wartość numb
console.log(numb + tru)// ?

console.log("Typy i wartości dodowania różnych typow do string")
console.log(str + tab + "typ tablicowy, powiększy tablicę o zmienną str");
console.log(str + tru + "typ string, Banka Zanka No Tachi True")

console.log("Typ bool i array")
console.log(tru + tab + "typ tablicowy powiększony o wartość tru")