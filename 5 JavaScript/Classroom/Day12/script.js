//Day12

//Use forEach and print each elements cube in given array.
let arr= [5,4,9,8];
arr.forEach(function(ele,ind)
{
    console.log(ele*ele*ele);
            //or
    console.log(ele**3);
})

//
let values = arr.forEach((ele,ind)=> 
{
    return ele%2==0;
})
console.log(values);              //output: undefined

//Map
let values2 = arr.map((ele,ind) => 
{
   return ele%2 == 0;
})
console.log(values2);              //output: 

//Filter




//Find()
let actresses = ["kajal agarwal", "some agarwal", "aishwarya"];

let res = actresses.find((elements,index) => 
{
    return elements.endsWith;                   
});          
console.log(res);               //output:      kajal agarwal


// print array of indexes of odd numbers in given array.
arr = [5,4,6,7,8,9,10];
let res1= arr.map((element, index) =>  element%2 !=0 ? index : 'null');
console.log(res1);                               //Output: 0 , 'null', 'null', 3 , 'null' , 5, 'null' , 'null'
result= res1.filter ((element, index) => element != 'null' );
console.log(result);                             //Output: 0, 3, 5 


// print first letter of words whose last letter is 'a'.
let names = ["raja", "puja", "john", "maaja"];
let endsWith = names.filter((e,i) => e.endsWith("a") );
console.log(endsWith);
let startsWith = endsWith.forEach((el,ind) => console.log(el.charAt(0)));


//print the first odd number that is greater than 5
ar  = [5,8,7,6,1,9,3];
let r = ar.find((e,i) => e %2 !=0 && e>5 )
console.log(r);
//----------------------------------------------------------------------------------------



//reverse(): 
let arr5= [5,4,6,8,9];
arr5.reverse();
console.log(arr5);

let s= "Harsh";
console.log(s.split('').reverse().join(''));          //output: hsrah


//reduce():
arr5 = [5,4,6,8,9];
let r5 = arr5.reduce((p,c) => {
    return p+c;
}, 0 );
console.log("Sum of elements: "+r5); 