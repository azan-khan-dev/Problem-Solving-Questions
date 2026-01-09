//Factorial of a number using for loop 
function fact(num)
{
    let facto=1

for(let i=1;i<=num;i++)
{
    facto=facto*i;

}
return facto
}
let number=5;
console.log("Factorial of ",number,"is:",fact(number));
