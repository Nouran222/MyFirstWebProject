const email = document.getElementById("email");
const password = document.getElementById("password");
form.addEventListener("submit", (e) => {e.preventDefault(); checkInputs(); });

function checkInputs()
{
    //get the values from the inputs
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
    
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
    if((emailValue === "nouran12@yahoo.com") && (passwordValue === "123_567"))
    {
        document.location.href='home1.html';
    }
    else if(isEmail(emailValue) && isPassword(passwordValue)){
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

function isPassword(password){
    return/^[\w@-]{6,12}$/.test(password);
}

function isEmail(email){
    return/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/.test(email);
}

