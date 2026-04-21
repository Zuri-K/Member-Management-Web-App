

//Next button for 1st step
const inputBtn = document.getElementById("inputBtn");

//email input and error variables
const emailInput = document.getElementById("emailInput");
const emailTypeError = document.querySelector("#emailTypeError");

//email confirmation
const emailConfirmInput = document.getElementById("emailConfirmInput")
const emailConfirmTypeError = document.getElementById("emailConfirmTypeError")

//password input and error variables
const passwordInput = document.getElementById("passwordInput");
const passwordTypeError = document.getElementById("passwordTypeError");
//header that indicates what step user is in
const stepHeader = document.getElementById("stepHeader");

//Step 1: email

function emailConfirm(){


    const emailLength = emailInput.value.length;

    if (emailLength === 0){
        inputBtn.disabled = true;
        inputBtn.style.backgroundColor = '#a7d6c2';

    }else{
      inputBtn.disabled = false;
      inputBtn.style.backgroundColor = '#19FFA3';
 
    } 
    
    inputBtn.textContent = "Next"
    stepHeader.textContent = "Step 1"
    emailConfirmInput.style.display = "none";
    passwordInput.style.display = "none";





}; 


emailInput.addEventListener("keyup", (event) =>{
    
    const emailLength = emailInput.value.length;
    if(event.key === "Backspace" && emailLength === 0){
        emailTypeError.textContent = "Please enter email. Please use a fake email.";
    }else{
        emailTypeError.textContent = ""
    }


});
emailInput.addEventListener("input", emailConfirm)
emailConfirm()

function buttonEvent(){
//Beginning Step 2


//Button onlick from "Next" to "Create"
    inputBtn.addEventListener("click", (event) => {

        if (inputBtn.textContent === "Next"){
            event.preventDefault()
            emailConfirmInput.style.display = "block";
            passwordInput.style.display = "block";
            inputBtn.textContent = "Create";
            stepHeader.textContent = "Step 2"
            inputBtn.disabled = true;
        }
    });  

};
buttonEvent()
//Validating confirm email is the same as email

function confirmEmailPassConfirm(){

    var know = true
    if(emailInput.value === "" || emailConfirmInput.value === "" || passwordInput.value === ""){
        //inputBtn.disabled = true;
        know = false
    }
    
    if (emailConfirmInput.value !== emailInput.value){
            emailConfirmTypeError.textContent = "Please confirm email"
            //inputBtn.disabled = true;
            know = false
    }else{
        emailConfirmTypeError.textContent = ""
    } 

    if(passwordInput.value.length < 8 && passwordInput.value.length > 0){
            passwordTypeError.textContent = "Password must be at least 8 characters"
            //inputBtn.disabled = true;
            know = false
    }else{
        passwordTypeError.textContent = ""
        }

    if (know === true){
        inputBtn.disabled = false;  
    }else{
        inputBtn.disabled = true;
    }
    
    

};
emailConfirmInput.addEventListener("input", confirmEmailPassConfirm)
passwordInput.addEventListener("input", confirmEmailPassConfirm)



confirmEmailPassConfirm()

