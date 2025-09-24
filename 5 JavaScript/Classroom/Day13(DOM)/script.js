//DOM

//1.
//Selection of element Using tagName
//Here we select the html element using tagName. 
let x = document.getElementsByTagName('h1');

//To acess the element stored in "x" variable here
console.log(x);               // it will print array of h1 elements 

//To acess the content inside element
console.log(x[0]);            // Hey! Harsh
console.log(x[0].textContent);                  //It will print the content return inside "h1" tag.

//Modify or change text inside element
x[0].textContent = "Welcome to JavaScript";    //Here it will modify the content of "h1" tag.
//-----------------------------------------------------------------------------------------------------

//2.
//Selection of element Using className
//Here we select the html element using className.
let y =  document.getElementsByClassName('para');

//To acess the element stored in "y" variable here
console.log(y);               // it will print array of class name as "para" elements

//To acess the content inside specific class 
console.log(y[0]);            // Lorem
console.log(y[0].textContent);                  //It will print the content return inside elements have className "para" tag.

//Modify or change text inside element containing ClassName "para"
y[0].textContent = "Content Changed";    //Here it will modify the content of element "para" tag.

//-------------------
//Task: 
let z =  document.getElementsByClassName('empty');
z[0].textContent = "Hello World";
console.log(y[0]);

//----------------------------------------------------------------------------------------------------------

//3.
//Selection of element Using idName.
//Here we select the html element using idName.
let a =  document.getElementByIdName('link');
z.href = "https://www.facebook.com";                   //here we changing the property or attribute of element declared with idName(link).




//-----------------------------------------------------------------------------------------------------------

//Tasks:
     

//4. 
//Selection of element Using QuerySelector:







//-------------------------------------------------------------------------------------------------------------

//5. 
//Selection of element Using :
