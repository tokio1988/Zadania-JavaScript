//zadanie 1
String.prototype.upperLower = function() { 
    var result = "";

    for(var i =0; i< this.length; i++)
    {
        if(this[i] === " ")
        {
            result += " ";
        }
        else if(i % 2 == 1)
        {
            result += this[i].toUpperCase();
        }
        else
        {
            result += this[i].toLowerCase();
        }
    }
    return result;
}

//var a = "Javascript jest super";
//console.log(a.upperLower());
//zadanie 2

var Car = function(mark,color)
{
    this.mark = mark;
    this.color = color;
    this.Days = [];
    this.km = 0;
}
Car.prototype.drive = function(km)
{
    this.km += km;
}

Car.prototype.printCarInfo = function()
{
    console.log("Nazwa: " + this.mark + " o kolorze " + this.color + " ma przebieg " + this.km);
}


Car.prototype.addInspectionsDays = function(day)
{
    this.Days.push(day);
}

Car.prototype.showInspectionsDates = function()
{
    for (var i = 0; i < this.Days.length; i++)
    {
        console.log(this.Days[i]);
    }
}

//zadanie 5

var Rectangle = function(width,heigth)
{
    this.width = width;
    this.heigth = heigth;
}

Rectangle.prototype.getArea = function()
{
    return this.width * this.heigth;
}

Rectangle.prototype.getPerimeter = function()
{
    return 2 * this.width + 2 * this.heigth;
}

//zadanie 6
var Calculator = function()
{
  this.operationsHistory = [];
}

Calculator.prototype.add = function(num1,num2)
{
  var result = num1 + num2;
  this.operationsHistory.push("Added " + num1 + " to " + num2 + " got " + result)
  return result
}

Calculator.prototype.multiply = function(num1,num2)
{
  var result = num1 * num2;
  this.operationsHistory.push("multiplied " + num1 + " with " + num2 + " got " + result);
  return result
}

Calculator.prototype.subtract = function(num1, num2)
{
  result = num1 - num2;
  this.operationsHistory.push("subtracted " + num1 + " from " + num2 + " got " + result);
  return result;
}
Calculator.prototype.divide = function(num1,num2)
{
  result = num1 / num2;
  this.operationsHistory.push("divided " + num1 +  " by " + num2 + " got " + result);
  return result;
}

Calculator.prototype.printOperations = function()
{
  for (var i = 0; i < this.operationsHistory.length;i++)
  {
    console.log(this.operationsHistory[i]);
  }
}

var cal1 = new Calculator()
cal1.add(5,5)
cal1.add(6,6)
cal1.multiply(5,5)
cal1.subtract(100,50);
cal1.divide(100,10);
cal1.printOperations();





