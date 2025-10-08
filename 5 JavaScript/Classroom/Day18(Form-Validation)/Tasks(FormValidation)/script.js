                                                    //Tasks

//Task1

//
const form = document.querySelector('#fr');                                  //selection 
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('cnfrmPwd');
function add()                                                               //action/event function
{
    form.classList.toggle('hide');          //toggle form on-off or event
}
document.getElementById('btn').addEventListener('click',add);         //eventListener


//
const errorsDiv = document.getElementById('errors')                    //selection 
function submitLogic(e)
{
    e.preventDefault();
    errorsDiv.textContent='';
    if(nameInput.value.trim()=='')
    {
        const p = document.createElement('p');                //creation of element
        p.textContent = "name is required";
        errorsDiv.append(p);
    }


    if(emailInput.value.trim()=='')
    {
        const p = document.createElement('p');                //creation of element
        p.textContent = "email is required";
        errorsDiv.append(p);
    }


    if(passwordInput.value.trim()=='')
    {
        const p = document.createElement('p');                //creation of element
        p.textContent = "password is required";
        errorsDiv.append(p);
    }

    if(confirmPasswordInput.value.trim()=='')
    {
        const p = document.createElement('p');                //creation of element
        p.textContent = "confirm password is required";
        errorsDiv.append(p);
    }

    if(passwordInput.value.length<=8)
    {
        const p = document.createElement('p');                //creation of element
        p.textContent = "password should be atleast 8 characters";
        errorsDiv.append(p);
    }

    if(passwordInput.value != '' && confirmPasswordInput.value !='' && passwordInput.value != confirmPasswordInput.value)
    {
        const p = document.createElement('p');                //creation of element
        p.textContent = "password and confirm password should be same";
        errorsDiv.append(p);
    }

    //emailRegex
    // let emailRegex = /^[A-Za-z0-9]{2,}+@[A-Za-z]{2,}+\.[A-Za-z]{2,}$/
    // if(emailInput.value != '' && !emailRegex.test(emailInput.value))
    // {
    //     const p = document.createElement('p');                //creation of element
    //     p.textContent = "Please enter valid email";
    //     errorsDiv.append(p);
    // }

    //passwordRegex
    // let passwordRegex = /(?=.*[A-Z]) (?=.*[A-Z])(?=.*[0-9])/
    // if(passwordInput.value != '' && !passwordRegex.test(passwordInput.value))
    // {
    //     const p = document.createElement('p');                //creation of element
    //     p.textContent = "Please enter valid password format";
    //     errorsDiv.append(p);
    // }
}
document.getElementById('fr').addEventListener('submit',submitLogic);   //eventListener


//showPassowrd or hide
document.getElementById('showPwd').addEventListener('click',function(){passwordInput.type = passwordInput.type == 'password' ? 'text' : 'password'; });