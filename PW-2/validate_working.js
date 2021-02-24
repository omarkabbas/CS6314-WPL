window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input element 
	// they are initially empty and hidden




    var emailSpan = document.createElement("span");
	emailSpan.style.display = "none"; //hide the span element
	var email = document.getElementById("email");
    email.parentNode.appendChild(emailSpan);

    const validateEmail = () => {
        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (email.value) {
            if (!regex.test(email.value)) {
                emailSpan.className = "error";
                emailSpan.textContent = "Please enter a valid email. Format: abc@def.xyz";
            }
            emailSpan.style.display = 'block';
        }
    }

    var passwordSpan = document.createElement("span");
    passwordSpan.style.display = "none"; //hide the span element
    var password = document.getElementById("pwd");
    password.parentNode.appendChild(passwordSpan);
    const validatePassword = () => {
        if (password.value) {
            if (!(password.value.length >= 6)) {
                passwordSpan.className = "error";
                passwordSpan.textContent = "Password should include atleast six characters.";
            }
            passwordSpan.style.display = 'block';
        }
    }

    var confirmSpan = document.createElement("span");
    confirmSpan.style.display = "none"; //hide the span element
    var confirm = document.getElementById("confirm");
    confirm.parentNode.appendChild(confirmSpan);
    const validateConfirm = () => {
        if (confirm.value) {
            if (!(confirm.value == password.value)) {
                confirmSpan.className = "error";
                confirmSpan.textContent = "Confirm Password should match Password";
            }
            confirmSpan.style.display = 'block';
        }
    }


    email.onfocus = function(){
        emailSpan.style.display = "block";
        emailSpan.className = "info";
        emailSpan.textContent = "Please enter a valid email. Format: abc@def.xyz";


    }

    email.onblur = function(){
        emailSpan.style.display = "none";
        emailSpan.textContent = "";
        validateEmail();

    }
    
    password.onfocus = function() {
        passwordSpan.style.display = "block";
        passwordSpan.className = "info";
        passwordSpan.textContent = "Password should include atleast six characters.";
    }

    password.onblur = function() {
        passwordSpan.style.display = "none";
        passwordSpan.textContent = "";
        validatePassword();
    }

    confirm.onfocus = function() {
        confirmSpan.style.display = "block";
        confirmSpan.className = "info";
        confirmSpan.textContent = "Password should include atleast six characters.";
    }

    confirm.onblur = function() {
        confirmSpan.style.display = "none";
        confirmSpan.textContent = "";
        validateConfirm();
    }


}
