//Ternary Operator:
// condition ? expr1 : expr2
// even ? "even" : "odd"
let num=+prompt("Enter a number");
let result = (num%2==0) ? "even" : "odd";
console.log('${num} is ${result}');                                 //even/odd


//Math.max() , Math.min()
console.log(Math.max(10,20,5,3,50,100,45));                       //100
console.log(Math.min(10,20,5,3,50,100,45));                       //3