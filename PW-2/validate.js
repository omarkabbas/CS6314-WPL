window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input element 
	// they are initially empty and hidden

    var span1 = document.createElement("span");
	span1.style.display = "none"; //hide the span element
	var email = document.getElementById("email");
    email.parentNode.appendChild(span1);


    email.onfocus = function(){


    }

    email.onblur = function(){


    }
    


}


