
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
form.addEventListener("submit", (e) => {e.preventDefault(); checkInputs(); });

function checkInputs()
{
    //get the values from the inputs
   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const password2Value = password2.value.trim();
    
    if(usernameValue === '')
        {
            //show error 
            //add error class
            setErrorFor(username,'username can not be blank');
        }
        else if(!isUserName(usernameValue)){
                setErrorFor(username,'username must be from 6 to 12 characters');
                }
        else{
        //add success class
            setSuccessFor(username);
        }
    if(emailValue === '')
        {
            setErrorFor(email,'email can not be blank');
        }else if(!isEmail(emailValue))
            {
                setErrorFor(email,'email is not valid');
            }else{
                setSuccessFor(email);
            }
    if(passwordValue === '')       
        {
            setErrorFor(password,'password can not be blank');
        }
        else if(!isPassword(passwordValue)){
                setErrorFor(password,'password must be from 6 to 12 characters');
                }
        else{
            setSuccessFor(password);
        }
     if(password2Value === '')      
        {
            setErrorFor(password2,'password can not be blank');
        }
    else if(passwordValue !== password2Value)
    {
        setErrorFor(password2,'passwords do not match');
    }
    else{
    setSuccessFor(password2);
    }
    if(isEmail(emailValue) && isPassword(passwordValue)){
       document.location.href="home2.html";
    }
}

function setErrorFor(input,message){
    const formcontrol = input.parentElement; //.form-control
    const small = formcontrol.querySelector('small');
    //add error message inside small
    small.innerText = message;
    //add error class
    formcontrol.className = 'form-control error';
}

function setSuccessFor(input){
const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}
function isUserName(username){
    return/^[a-z\d]{6,12}$/i.test(username);
}

function isPassword(password){
    return/^[\w@-]{6,12}$/.test(password);
}

function isEmail(email){
    return/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/.test(email);
}