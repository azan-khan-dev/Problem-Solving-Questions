 // multiple ways to swap values in javascript
 //way 1


 console.log("Swapping values in javascript way 1:");
 function swaping(x,y)
 {
     let temp=x;
     x=y;
     y=temp;
     return [x,y]

 }
    let a=5,b=10;
    console.log("After swap a and b:",swaping(a,b));

    //way 2
    console.log("\nSwapping values in javascript way 2:");

    function swap2(x,y)
    {
        x=x+y;
        y=x-y
        x=x-y;
        return [x,y]            


    }
    let p=15,q=20;
    console.log("before swap p and q: ",p,q,);
    [p,q]=swap2(p,q);
    console.log("After swap p and q: ",p,q,);
    
//way 3
console.log("\nSwapping values in javascript way 3:");
function swap3(x,y)
{
    x=x^y
    y=x^y
    x=x^y
    return [x,y]
}
let m=25,n=30;
console.log("before swap m and n: ",m,n,);
[m,n]=swap3(m,n);
console.log("After swap m and n: ",m,n,);
