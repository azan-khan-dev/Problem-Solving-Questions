function fibo(num)
{
    a=0,b=1;
    let series=[]
    for(let i=0;i<num;i++)
    {
        series.push(a);
        let next=a+b;
        a=b;
        b=next;

    }
    return series;
}
console.log(fibo(10))