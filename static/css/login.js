const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput")

const loginBtn = document.getElementById("loginBtn")

const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")


function lengthCheck(){

    loginBtn.disabled = true;
    if (emailInput.value.length === 0 || passwordInput.value.length < 8){
        loginBtn.disabled = true;
    }else{
        loginBtn.disabled = false;
    }

    if (passwordInput.value.length < 8 && passwordInput.value.length > 1){
        passwordError.textContent = "Password must be 8 characters long"
    }else{
        passwordError.textContent = ""
    }


}



emailInput.addEventListener("keyup", (event) =>{
    
    if(event.key === "Backspace" && emailInput.value.length === 0){
        emailError.textContent = "Please enter email. Please use a fake email.";
    }else{
        emailError.textContent = ""
    }


});

emailInput.addEventListener("input", lengthCheck)
passwordInput.addEventListener("input", lengthCheck)

lengthCheck()