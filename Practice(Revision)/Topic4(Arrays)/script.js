//Arrays : Collections of anytype of items.

//Array Declaration:
//1. Static Array
let studentsName = ["Harsh", "Mohit", "Azhar", "Adarsh"];
console.log(studentsName);

//2. Dynamic Array


//3. To check typeof 
console.log(typeof studentsName);
console.log(typeof(studentsName));

//4. To check array length
console.log(studentsName.length);

//5. Acess values of array index-wise.
console.log(studentsName[0]);
console.log(studentsName[1]);
console.log(studentsName[2]);
console.log(studentsName[3]);

//6. To change the array value of specific index.
studentsName[3] = "Akash";
console.log(studentsName[3]);

//7. Loops in array
//i. for-loop:
     console.log("-------for------");
     for(let i=0; i<studentsName.length;i++)
     {
        console.log(studentsName[i]);
     }
//ii.for-of
     console.log("-------for-of-------");
     for(let value of studentsName)
     {
        console.log(value);
     }
//iii.for-in
     console.log("------for-in------");
     for(let indx in studentsName)
     {
        console.log(indx);
     }
//iv. forEach()
     console.log("------forEach------");


//8.Array Methods:
     console.log("------Array Methods------");
//i. Push(): add new element to end of array. 
     console.log("------Push()------");
     studentsName.push("Ayush");
     console.log(studentsName);

//ii.Pop(): to delete element present at end of array.
     console.log("------Pop()------");
     studentsName.pop();
     console.log(studentsName);

//iii.toString(): to convert array to string.
     console.log("------toString()------");
     console.log(studentsName.toString());

//iv. unshift(): to add new element at start of array
     console.log("------unshift()------");
     studentsName.unshift("Monali");
     console.log(studentsName);

//v. shift(): to delete first existing element of array.
     console.log("------shift()------");
     studentsName.shift();
     console.log(studentsName);

//vi. concat(): joins multiple arrays & returns the result.
     let arr = [" Welcome to javascript"]
     console.log("------concat()------");
     console.log(studentsName.concat(arr));

//vii.slice(strtIndx,endIndx): return a piece of the array or sub-array.
     console.log("------slice()------");
     console.log(studentsName.slice(1,3));

//viii.splice(strtIndx,delCount,newElmnt): change original array(add,remove,replace):
     console.log("------splice()------");
     console.log("Before Splice operation ",studentsName);
     studentsName.splice(1,2,"Montu","Ajju");
     console.log("After Splice Operation",studentsName);