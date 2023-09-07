const form=document.querySelector('#form');
const username=document.querySelector("#username");
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})
function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();

    let success=true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is Required');

    }
    else{
        success=true;
        setSuccess(username);
    }
    if(emailVal===''){
        success=false;
        setError(email,'Email Id is Required');

    }
    else if(!validateEmail(emailVal)){
        success=false;
        setError(email,'Please Enter Valid Email Id');

    }
    else{
        setSuccess(email)
    }

    if(passwordVal===''){
        success=false;
        setError=(password,'Password is Required');

    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,'Password must be atleast 8 character Required')

    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal===''){
        success=false;
        setError(cpassword,'Confirm Password is Required')

    }
    else if(cpasswordVal!==passwordVal){
        success=false;
        setError(cpassword,'Password does not Match');

    }
    else{
        setSuccess(cpassword)
    }

    return success;
}

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerHTML=message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');

}
function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerHTML='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    
      
}

const popup=document.getElementById('popup');

function openPopup(){

    popup.classList.add('open-popup');
}
function closePopup(){
    popup.classList.remove('open-popup')
}