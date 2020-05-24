function printArray (table)
{
  for (var i = 0; i < table.length; i++)
  {
      for (var j = 0; j < table[i].length; j++)
      {
        console.log(table[i][j]);
      }
  }
}

var tab = [
  [1,2],
  [3,4,5],
  [7],
  [8,9,10]
]

printArray(tab)