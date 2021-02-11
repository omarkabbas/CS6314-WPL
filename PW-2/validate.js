
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
    
    email.onfocus = function(){
        emailSpan.style.display = "block";
        emailSpan.className = "info";
        emailSpan.textContent = "Please enter a valid email. Format: abc@def.xyz";
    }

    email.onblur = function(){
        emailSpan.style.display = "none";
        emailSpan.textContent = "";
    }
    
    password.onfocus = function() {
        passwordSpan.style.display = "block";
        passwordSpan.className = "info";
        passwordSpan.textContent = "Password should include atleast six characters.";
    }

    password.onblur = function() {
        passwordSpan.style.display = "none";
        passwordSpan.textContent = "";
    }

    confirm.onfocus = function() {
        confirmSpan.style.display = "block";
        confirmSpan.className = "info";
        //confirmSpan.textContent = "Password should include atleast six characters.";
    }

    confirm.onblur = function() {
        confirmSpan.style.display = "none";
        confirmSpan.textContent = "";
    }
    console.log("test1");

    let data = document.getElementsByClassName("btn btn-warning");

    console.log(data[0]);

    // document.getElementsByClassName("btn btn-warning")[0].addEventListener('click', function(event) {
    //     validate(emailSpan,email,passwordSpan,password,confirmSpan,confirm);
        
    //     event.preventDefault();
        
    // }, false);

    document.getElementById("myForm").addEventListener('submit', function(event) {
        event.preventDefault();
        validate(emailSpan,email,passwordSpan,password,confirmSpan,confirm);
    }, false);




    console.log("test2")

    // document.getElementsByClassName("btn btn-warning")[0].onclick = function() {
    //     console.log("test2");
    //     validate(emailSpan,email,passwordSpan,password,confirmSpan,confirm);
    // }
    
}

function validate(emailSpan,email,passwordSpan,password,confirmSpan,confirm){
        console.log("test");

        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
            if (!regex.test(email.value)) {
                
                email.classList.add('error');
                emailSpan.textContent = "Please enter a valid email. Format: abc@def.xyz";
                emailSpan.style.display = 'block';
            }
            else{
                email.classList.remove('error');

            }
            emailSpan.style.display = 'block';
   
    
        if (password.value) {
            if (!(password.value.length >= 6)) {
                password.classList.add('error');
                passwordSpan.textContent = "Password should include atleast six characters.";
                passwordSpan.style.display = 'block';
             
            }
            passwordSpan.style.display = 'block';
            
        }
    
        if (confirm.value) {
            if (!(confirm.value == password.value)) {
                confirm.classList.add('error');
                confirmSpan.textContent = "Confirm Password should match Password";
                confirmSpan.style.display = 'block';
                
            }
            confirmSpan.style.display = 'block';
            
        }
    console.log("Form Submitted!!!!");
    return true;
    
}
