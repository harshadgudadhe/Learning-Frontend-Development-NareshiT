// do-while loop
//Check whether the given string is palindrome or not
//Example: madam ===> yes
//Example: hello ===> no
const s = prompt("enter a string");
let str = s.toLowerCase();
let revstr='';

for(let i=str.length-1; i>=0; i--)
{
    revstr=revstr+str.charAt(i);
}

if(str==revstr)
{
    console.log(`${str} is palindrome`);
}else{
    console.log(`${str} isn't palindrome`);
}