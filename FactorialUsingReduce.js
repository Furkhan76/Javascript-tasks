let a = 3

function factorial(num)
{
    let arr = Array.from(Array(num+1).keys())
    console.log(arr)
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    return c
}
console.log(factorial(a))