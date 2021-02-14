window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input element 
	// they are initially empty and hidden

    var emailSpan = document.createElement("span");
	emailSpan.style.display = "none"; //hide the span element
	var email = document.getElementById("email");
    email.parentNode.appendChild(emailSpan);

    
    var passwordSpan = document.createElement("span");
    passwordSpan.style.display = "none"; //hide the span element
    var password = document.getElementById("pwd");
    password.parentNode.appendChild(passwordSpan);
    

    var confirmSpan = document.createElement("span");
    confirmSpan.style.display = "none"; //hide the span element
    var confirm = document.getElementById("confirm");
    confirm.parentNode.appendChild(confirmSpan);
    

    console.log("test1");

    email.onfocus = function(){
        emailSpan.style.display = "block";
        emailSpan.textContent = "Please enter a valid email. Format: abc@def.xyz";
        
    }
    email.onblur = function(){
        emailSpan.style.display = "none";
        emailSpan.textContent = "";
        email.classList.remove('error');

    }
    
    password.onfocus = function() {
        passwordSpan.style.display = "block";
        passwordSpan.textContent = "Password should include atleast six characters.";
    }

    password.onblur = function() {
        passwordSpan.style.display = "none";
        passwordSpan.textContent = "";
        password.classList.remove('error');
        
    }

    confirm.onfocus = function() {
        confirmSpan.style.display = "block";
        password.classList.remove('error');
    }

    confirm.onblur = function() {
        confirmSpan.style.display = "none";
        confirmSpan.textContent = "";
        password.classList.remove('error');
        confirm.classList.remove('error');
    }

    document.getElementById("myForm").addEventListener('submit', function(event) {
        event.preventDefault();
        validate(emailSpan,email,passwordSpan,password,confirmSpan,confirm);
    }, false);

    console.log("test2");
    
}

function validate(emailSpan,email,passwordSpan,password,confirmSpan,confirm){
        console.log("Inside Validate");

        var v = true;
        const pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!pattern.test(email.value)) {
                email.classList.add('error');
                emailSpan.textContent = "Not a valid email address. Please re-enter !";
                emailSpan.style.display = 'block';
                v = false;
                
            }
    
            if (!(password.value.length >= 6)) {
                password.classList.add('error');
                confirm.classList.add('error');
                passwordSpan.textContent = "Password should include atleast six characters.";
                passwordSpan.style.display = 'block';
                v = false;
             
            }
            if (!(confirm.value == password.value)) {
                password.classList.add('error');
                confirm.classList.add('error');
                confirmSpan.textContent = "Confirm Password should match Password";
                confirmSpan.style.display = 'block';
                v = false;
            }
            if (v) {

                    email.classList.remove('error');
                    password.classList.remove('error');
                    confirm.classList.remove('error');
                    document.getElementById("myForm").submit();
                    console.log("Form Submitted!!!!");

             }

    return v;

}
