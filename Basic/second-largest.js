// seconf largest number in an array
function sec_lar(arr)
{
    let max=arr[0];
    let sec_max=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            sec_max=max;
            max=arr[i]
        }
        else if(arr[i]>sec_max)
        {
            sec_max=arr[i]
        }
    }
    return sec_max;
}
let array=[1,2,3,4,5,68];
console.log("Second Largest Number in the array is:",sec_lar(array));