function circlesLength(r)
{
  if ( r == Number(r))
  {
    return 2 * Math.PI * r
  }
  else
  {
    return false;
  }
}

function circlesField(r)
{
  return Math.PI * (r * r);
}

console.log(circlesLength("Bankai Zanka No Tachi"));
console.log(circlesLength(10));
console.log(circlesField(5))