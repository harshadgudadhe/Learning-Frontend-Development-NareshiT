//LOOPS

let name = "Harsh"; 
//1. while
//2. do-while
//3. for
    /*Syntax:
      
       for(let i=0; i<5;i++)
       {
          //statements;
       }
    */
    //Example:
    for(let i=0; i<name.length;i++)
    {
       let value = name[i];
       console.log(value);    // H a r s h      
    }

//4. for-of : used with String & Arrays.
    /*Syntax:
      
       for(let val of strVar)
       {
          //statements;
       }
    */
    //Example:
    for(let value of name)
    {
        console.log(value);     //H a r s h
    }

//5. for-in : used with Objects only (String & Arrays).
    /*Syntax:
      
       for(let val in strVar)
       {
          //statements;
       }
    */
    //Example:   
    for(let indx in name)
    {
        console.log(indx);      // 0 1 2 3 4 
    }
    

//6. forEach : used with String & Arrays.
