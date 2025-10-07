//Task1: create 3-input field and submit the information after varifying that user-entered the required field or not 
// and if user didn't entered the value then generate warning msg in red color of that the field requires the data.
    
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
    const emailInp= document.getElementById("email");
    const emailInpValue = emailInp.value;
    if(emailInpValue.trim() =='')
    {
        document.getElementById("email-error").textContent = "email is required";
        document.getElementById("email-error").style.color = "red";
    }

    //3. Validate Password
    const passwordInp= document.getElementById("pass");
    const passwordInpValue = passwordInp.value;
    if(passwordInpValue.trim() =='')
    {
        document.getElementById("pass-error").textContent = "password is required";
        document.getElementById("pass-error").style.color = "red";
    }
});

function fun3 ()
{
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

//
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