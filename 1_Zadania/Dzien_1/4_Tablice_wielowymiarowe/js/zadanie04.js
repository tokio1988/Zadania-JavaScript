var arr =[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];

function print2DArray(array)
{
    for(var i = 0; i<array.length; i++)
    {
        console.log(array[i].join(" ,"));
    }
}

print2DArray(arr);