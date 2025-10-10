//Day20 of learning JavaScript
//Topic: Promises

// Syntax:  Promise(callbackFunction(arg1,arg2)
// {
// });

//Example1:
let x=20000;
let p = new Promise(function(resolve,reject)
{
   if(x<30000){
    setTimeout(()=> resolve("take money"),2000)
   }else{
     reject("No money");
   }
});

console.log(p);
p.then((res)=> console.log(res,p))
  .cath((err)=> console.log(err));
//-----------------------------------------------------------------------------------------------------------------------------------


//Example2: "JOHN's father promised him that he will come evening and bring the cake"   (example of promise chaining)
let y=20000;
let q = new Promise(function(resolve,reject)
{
   if(y<30000){
    setTimeout(()=> resolve("take money"),2000)
   }else{
     reject("No money");
   }
});

console.log(q);
q.then((res)=> res*2)
   .then((res2)=> res2*2)
     .then((res3)=> console.log(res3))
       .cath((err)=> console.log(err));
//--------------------------------------------------------------------------------------------------------------------------------------

