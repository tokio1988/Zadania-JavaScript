

var dates = [1988, 1993, 1959, 1923, 1961, 1992]


function findTheYoungest (array)
{
  var min = 0
  var age;
  for (var i = 0; i < array.length; i++)
  {
    if (array[i] > min)
    {
      min = array[i];
    }
  }
  age = 2019 - min
  console.log("Wiek najmłodszej osoby wynosi: " + age + " Osoba ta urodziła się w: " + min);
}

function findTheOldest(array)
{
  var min = array[0]
  for (var i = 0; i < array.length; i++)
  {
    if (array[i]<min)
    {
      min = array[i];
    } 
  }
  age = 2019 - min
  console.log("Najstasza osoba urodziłą się w: " + min + " a jej wiek to: " + age)
}



findTheYoungest(dates)
findTheOldest(dates)
