
function getMissingElement(array)
{
    for(var i=1; i<array.length; i++)
    {
        if(Math.abs(array[i] - array[i-1] != 1))
        {
            return array[i]-1;
        }
    }
    return null;
}