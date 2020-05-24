var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

function checkArray(array)
{
    var result = [];

    for(var i =0; i <array.length; i++)
    {
        var resultTmp = true;
        for(var j=0; j<array[i].length; j++)
        {
            if(array[i][j] % 2 !==0)
            {
                resultTmp = false;
                break;
            }
        }
        result.push(resultTmp);
    }

    return result;
}

console.log(checkArray(arr));