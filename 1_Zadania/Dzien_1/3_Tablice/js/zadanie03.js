function distFromAverage(array)
{
  var sum = 0; 
  var avg;
  for (var i = 0; i < array.length; i++)
  {
    sum+= array[i];
  }

  avg = sum/array.length;

  for (var i = 0; i < array.length; i++)
  {
    if (array[i] < avg)
    {
      array[i] = avg - array[i];
    }
    else
    {
      array[i] = array[i] - avg
    }
    
  } 

  return array;
}

console.log(distFromAverage([1,1,1,1]))
console.log(distFromAverage([1,2,3,4,5,6,7]))
console.log(distFromAverage([2,8,3,7]))