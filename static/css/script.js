const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const fourDigits = document.getElementById("fourDigits");
//Error for 4 digits
const lastFourError = document.getElementById("lastFourError");

const addBtn = document.getElementById("addBtn");

const addedMember = document.getElementById("addedMember");

const memberList = document.querySelector(".memberList");



function digits(){

    const fourDigitsLength = fourDigits.value.length
    if(fourDigitsLength !== 4){
        lastFourError.style.display = "block"
        lastFourError.textContent = "Sorry please input only 4 digits"
    }else{
        lastFourError.style.display = "none"
    }

};

fourDigits.addEventListener("input", digits);




addBtn.addEventListener("click", (event) =>{

    const firstNameInputLength = firstNameInput.value.length;
    const lastNameInputLength = lastNameInput.value.length;
    const fourDigitsLength = fourDigits.value.length;


    const fullMessage = `${firstNameInput.value}, ${lastNameInput.value}, ${fourDigits.value}`

    //event.preventDefault()
    if (firstNameInputLength > 0 && lastNameInputLength > 0 && fourDigitsLength === 4){

        const newEntry = memberList.cloneNode(true);
        newEntry.querySelector("h1").textContent = fullMessage;
        newEntry.style.display = "block";
        memberList.parentElement.appendChild(newEntry);

    }else{
    }


});

function updateMemberList() {
    addedMember.textContent = `${firstNameInput.value}, ${lastNameInput.value}, ${fourDigits.value}`;
}

firstNameInput.addEventListener("input");
lastNameInput.addEventListener("input");
fourDigits.addEventListener("input");


