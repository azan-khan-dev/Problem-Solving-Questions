//Reverse a string using for loop 
function reverseStr(str)
{
    let rev="";
    for(let i=str.length-1;i>=0;i--)
    {
        rev=rev+str[i];

    }
    return rev;


}
let string="Hello World";
console.log("Original String:",string);
console.log("Reversed String:",reverseStr(string));