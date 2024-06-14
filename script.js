
const nameError = document.querySelector(".name-error");
const phoneError = document.querySelector(".phone-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const submitError = document.querySelector(".submit-error");

function nameValid(){
    var fullName= document.getElementById("fullname").value;
    
    if(fullName.length == 0){
        nameError.innerHTML= "name required";
        return false;
    }
    else if(!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML= "one more name";
        return false;
    }
    else{
        nameError.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
        return true;
    }
}
function phoneValid(){
    var phoneNumb=document.getElementById("tel").value;
    
    if(phoneNumb.length == 0){
        phoneError.innerHTML= "required";
        return false;
    }
    else if(phoneNumb.length !== 11) {
        phoneError.innerHTML= "incomplete";
        return false;
    }
    else if(!phoneNumb.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML= "up to 11digits";
        return false;
    }
    else{
        phoneError.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
        return true;
    }
}

function emailValid(){
    var mailValid=document.getElementById("email").value;
    
    if(mailValid.length == 0){
        emailError.innerHTML= "email required";
        return false;
    }
    
    else if(!mailValid.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML= "incorrect email";
        return false;
    }
    else{
        emailError.innerHTML= '<i class="fa-regular fa-circle-check"></i>';
        return true;
    }
}

function accountValid(){
    if(!nameValid() || !phoneValid() || !emailValid()) {
        submitError.style.display= "block";
        submitError.innerHTML= "form incomplete!";
        setTimeout(function (){submitError.style.display= "none"}, 3000);
        return false;
    }
}