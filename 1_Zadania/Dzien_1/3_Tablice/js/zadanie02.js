function add(array)
{
  var sum = 0;
  for (var i = 0; i < array.length; i++)
  {
    sum += array[i];
  }
  return sum
}

function multiPly(array)
{
  var ratio = 1; 
  for (var i = 0; i < array.length; i++)
  {
    //ratio = i;
    ratio *= array[i];
  }
  return ratio;
}

console.log(add([1,2,3]))
console.log(multiPly([2,2,2,4]))