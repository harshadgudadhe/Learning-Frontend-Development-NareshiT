//Day17
//Topic: Events

//Type1: mouse events: click, mouse over, mouse out etc.
//Example1:



//--------------------------------------------------------------------------------------------------------

//Type2: Keyboard Events: keyUp, keyDown, keyPress etc.
//Example1:
//document.addEventListener("keydown", function (e) 
// {
//     if(e.key=='r')
//     {
//       document.getElementById('key').style.color="red";
//     }else if(e.key=='g')
//     {
//         document.getElementById('key').style.color="green";
//     }else if(e.key=='b')
//     {
//       document.getElementById('key').style.color="blue";
//     }else if(e.key=='ArrowUp'){
//       document.getElementById('key').style.top="-20px";
//     }
// });


//--------------------------------------------------------------------------------------------------------

//Type3: Form Related Events: submit,reset,change,input,select,focus.
//Task1: create 3-input field and check
    document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault();

    //1. Validate Name
    const nameInp = document.getElementById("name");
    const nameInpValue = nameInp.value;
    if(nameInpValue.trim() =='')
    {
        document.getElementById("name-error").textContent = "name is required";
        document.getElementById("name-error").style.color = "red";
    }


    //2. Validate Email
    const emailInp= document.getElementById("name");
    const emailInpValue = emailInp.value;
    if(emailInpValue.trim() =='')
    {
        document.getElementById("email-error").textContent = "email is required";
        document.getElementById("email-error").style.color = "red";
    }


    //3. Validate Password
    const passwordInp= document.getElementById("name");
    const passwordInpValue = passwordInp.value;
    if(passwordInpValue.trim() =='')
    {
        document.getElementById("pass-error").textContent = "password is required";
        document.getElementById("pass-error").style.color = "red";
    }
});

function fun3 ()
{
    console.log("runnn");
    const inpName = document.getElementById("name")
    const nameInpValue = inpName.value;
    if (nameInpValue.trim() == '')
    {
        document.getElementById("name-error").textContent = "name is required";
        document.getElementById("name-error").style.color = "red"
    }
    else
    {
        document.getElementById("name-error").textContent = "";
    }
}

function fun4()
{
    document.getElementById("name-error").textContent = "";
}

function fun5()
{
    document.getElementById("email-error").textContent = "";
}

function fun6()
{
    document.getElementById("pass-error").textContent = "";
}

function fun7()
{
    let passInpType = document.getElementById("pass").getAttribute("type");
    if(passInpType=="password")
    {
        document.getElementById("pass").setAttribute("type","text");
    }else if(passInpType=="text")
    {
        document.getElementById("pass").setAttribute("type","password");
    }
}