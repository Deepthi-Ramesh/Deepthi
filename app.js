function validateFirstName(){
    var letters = /^[A-Za-z]+$/;     
    var firstname = document.getElementById('firstname');    
    var error=document.querySelector('.firstname #error');
    if(firstname.value ===""||firstname.value === null){
        error.innerHTML = "Firstname should be filled";
        firstname.style.border = "1px solid #e01111";
        return false;
    }
    else if(!firstname.value.match(letters)) {
        error.innerHTML = "Firstname should only contain characters";
        firstname.style.border = "1px solid #e01111";
        return false;
    }
    else {
        error.innerHTML = "";
        firstname.style.border = "1px solid #34cf20";
        return true;
    }
}

function validateLastName(){
    var letters = /^[A-Za-z]+$/;     
    var lastname = document.getElementById('lastname');
    var error=document.querySelector('.lastname #error');
    if(lastname.value==""||lastname.value==null){
        error.innerHTML="Lastname should be filled";
        lastname.style.border="1px solid #e01111";
        return false
    }
    else if(!lastname.value.match(letters)){
        error.innerHTML="Lastname should only contain characters";
        lastname.style.border="1px solid #e01111";
        return false
    }
    else{
        error.innerHTML="";
        lastname.style.border="1px solid #34cf20";
        return true;
    }
}

function validateMobileNumber(){
    var phone=document.getElementById('phone');
    var error=document.querySelector(".phone #error");
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(phone.value==""||phone.value==null){
        error.innerHTML="Phone no should be filled";
        phone.style.border="1px solid #e01111";
        return false;
    }
    else if(!phone.value.match(phoneno)){
        error.innerHTML="invalid phone number";
        phone.style.border="1px solid #e01111";
        return false;
    }
    else{
        error.innerHTML="";
        phone.style.border="1px solid #34cf20";
        return true;
    }
}

function validateWebsite(){
    var myRadioButton =document.getElementById("yes");
    var myTextArea = document.getElementById('website');
    myRadioButton.onclick = function() {
        myTextArea.focus();
    }
    myTextArea.onfocus = function() {
        myRadioButton.checked = true;
        
    }
    return true;
}

function validateEmail() {
    var error = document.querySelector('.email #error');
    var email = document.getElementById('email');
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email.value === ""){
        error.innerHTML = "email should be filled";
        email.style.border = "1px solid #e01111";
        return false;
    }
    else if (!re.test(email.value)) {
        error.innerHTML="invalid email id";
        email.style.border="1px solid #e01111";
        return false;
    }
    else {
        error.innerHTML="";
        email.style.border="1px solid #34cf20";
        return true;
        
    }
}

function validateUrl(){
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    var url = document.getElementById('website');

   if (!url.value.match(regex)) {
       return false;
   }
   else {
     url.style.border="1px solid #34cf20";
     return true;
   }
}

function Onclick(){
    if( validateFirstName() && validateLastName()
        && validateMobileNumber() && validateWebsite()
        && validateEmail() && validateUrl() ) {
            return true;
        }
    return false;
}
function app(){
    if(Onclick()){
        alert("Form submitted successfully");
    }
}




 


