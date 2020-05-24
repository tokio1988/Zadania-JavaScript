function calculateTip(amount,rating)
{
  if (rating == "Very good service")
  {
    return amount * 0.25;
  }
  else if (rating == "Good service")
  {
    return amount * 0.2
  }
  else if (rating == "Neutral service")
  {
    return amount * 0.15;
  }
  else if (rating == "Bad service")
  {
    return "Beznajdziejna obsługa. Nie będzie żadnego napiwku";
  }
  else
  {
    return "Opis nieczytelny"
  }
}

console.log(calculateTip(100,"Very good service"))
console.log(calculateTip(100,"Good service"))
console.log(calculateTip(100,"Neutral service"))
console.log(calculateTip(100,"Bad service"));
console.log(calculateTip(100,))