//using set function to remove duplicates from an array
function removeduplicate(arr)
{
    let newarr=[...new Set(arr)];
    return newarr;
}
let array=[1,2,2,3,4,4,5,5,6];
console.log("Original Array:",array);
console.log("Array after removing duplicates:",removeduplicate(array)); 
