function factors(numb)
{
  for (var i = numb; i >= 1; i--)
  {
      if (numb % i == 0)
      {
        console.log(i);
      }
  }
}

factors(54)