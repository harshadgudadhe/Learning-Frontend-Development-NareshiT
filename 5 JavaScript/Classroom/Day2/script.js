// Data-types
let a=25;
console.log(typeof a);
a="harsh";
console.log(typeof a);
a=true;
console.log(typeof a);
a=undefined;
console.log(typeof a);
a={name:"harsh", age:21};
a=null;
console.log(typeof a);
a= [1,2,3,4];
console.log(typeof a);
a = {};
console.log(typeof a);
function abc(){}
console.log(typeof abc);


// Type-casting





//numbers
let num = 25.4168;
console.log(typeof num);               // number
console.log(num.toFixed(2));          // to round-up for 2 digits after decimal
console.log(num.toPrecision(3));      // to round-up for 3 digits from starting

num = 25;
console.log(num.toString(2));     //binary
console.log(num.toString(8));     //octal
console.log(num.toString(10));    //decimal
console.log(num.toString(16));    //hexa-decimal


//Math methods
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));
console.log(Math.pow(2,3));
console.log(Math.max(2,5,7,9));
console.log(Math.min(2,5,7,9));
console.log(Math.abs(-10));
console.log(Math.ceil(2.50));
console.log(Math.floor(2.50));
console.log(Math.round(2.50));
console.log(Math.round(2.49));
// console.log(Math.random());