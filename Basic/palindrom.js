//Check whether a string is palindrome or not
function PalindromeStr(str)
{
    let rev="";
    for(let i=str.length-1;i>=0;i--)
    {
        rev=rev+str[i];

    }
    if(rev==str)
    {
        return true

    }
    else
    {
        return false
    }


}
let string="Hello";
console.log("Palindrome String:",PalindromeStr(string));