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

    // let data = document.getElementsByClassName("btn btn-warning");

    // console.log(data[0]);

    // document.getElementsByClassName("btn btn-warning")[0].addEventListener('click', function(event) {
    //     validate(emailSpan,email,passwordSpan,password,confirmSpan,confirm);
        
    //     event.preventDefault();
        
    // }, false);


    email.onfocus = function(){
        emailSpan.style.display = "block";
        //emailSpan.className = "info";
        emailSpan.textContent = "Please enter a valid email. Format: abc@def.xyz";
        
    }

    var formElem1 = document.getElementsByClassName("form-control")[0];
    
    email.onblur = function(event){
        emailSpan.style.display = "none";
        emailSpan.textContent = "";
        email.classList.remove('error');
    }
    
    password.onfocus = function(event) {

        if (formElem1.value != ""){
            event.preventDefault();
            //event.stopPropagation();
         }
        passwordSpan.style.display = "block";
        //passwordSpan.className = "info";
        passwordSpan.textContent = "Password should include atleast six characters.";
    }

    password.onblur = function() {
        passwordSpan.style.display = "none";
        passwordSpan.textContent = "";
        password.classList.remove('error');
        
    }

    confirm.onfocus = function() {
        confirmSpan.style.display = "block";
        //confirmSpan.className = "info";
        //confirmSpan.textContent = "Password should include atleast six characters.";
    }

    confirm.onblur = function() {
        confirmSpan.style.display = "none";
        confirmSpan.textContent = "";
        confirm.classList.remove('error');
    }

    document.getElementById("myForm").addEventListener('submit', function(event) {
        event.preventDefault();
        validate(emailSpan,email,passwordSpan,password,confirmSpan,confirm);
    }, false);

    console.log("test2");

    // document.getElementsByClassName("btn btn-warning")[0].onclick = function() {
    //     console.log("test2");
    //     validate(emailSpan,email,passwordSpan,password,confirmSpan,confirm);
    // }
    
}

function validate(emailSpan,email,passwordSpan,password,confirmSpan,confirm){
        console.log("Inside Validate");

        var v = true;
        const pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //var pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
            if (!pattern.test(email.value)) {
                
                email.classList.add('error');
                emailSpan.textContent = "Not a valid email address. Please re-enter !";
                emailSpan.style.display = 'block';
                return false;
            }
            //  else{
            //      email.classList.remove('error');

            //  }
            // //emailSpan.style.display = 'block';
    
            else if (!(password.value.length >= 6)) {
                password.classList.add('error');
                passwordSpan.textContent = "Password should include atleast six characters.";
                passwordSpan.style.display = 'block';
                return false;
             
            }
            // else{
            //     password.classList.remove('error');
            // }
            // passwordSpan.style.display = 'block';
            
            else if (!(confirm.value == password.value)) {
                password.classList.add('error');
                confirm.classList.add('error');
                confirmSpan.textContent = "Confirm Password should match Password";
                confirmSpan.style.display = 'block';
                return false;
            }
            else {

                    email.classList.remove('error');
                    password.classList.remove('error');
                    confirm.classList.remove('error');
             }
            // confirmSpan.style.display = 'block';
    console.log("Form Submitted!!!!");
    //return true;
    
}
