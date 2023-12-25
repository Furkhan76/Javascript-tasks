/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/
let random = Math.random()

console.log(random)

let x = prompt("enter the first number")
let z = prompt("enter the operation to be performed")
let y = prompt("enter the second number")

let obj = {
    "+": "-",
    "-": "/",
    "/": "*",
    "*": "+",
}

if(random > 0.1)
{
 alert(`The result is ${eval(`${x} ${z} ${y}`)}`)   
}

else
{
    z = obj[z]
    alert(`the result is ${eval(`${x} ${z} ${y}`)}`)
}