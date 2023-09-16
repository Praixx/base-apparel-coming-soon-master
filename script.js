document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();

    const emailValue = document.getElementById("email").value;
    const emailField = document.getElementById("email");
    
    const emailRegex = /^([a-z0-9])(([\-.]|[_]+)?([a-z0-9]+))*(@)([a-z0-9])((([-]+)?([a-z0-9]+))?)*((.[a-z]{2,3})?(.[a-z]{2,6}))$/i;
    let result;

    if(!emailRegex.test(emailValue)){
        document.getElementById("error-message").style.display = "block";
        document.getElementById("email").style.border = "1px solid var(--Soft-Red)"
        document.querySelector(".error-icon").style.display = "block";
        result = "failure"

        setTimeout(function(){

            if(result == "failure"){
                document.getElementById(emailField.id).focus();
                document.getElementById("email").style.border ="1px solid var(--Dark-Grayish-Red)";
                document.getElementById("email").value = "";
                document.getElementById("error-message").style.display = "none";
                document.querySelector(".error-icon").style.display = "none";
                
            }
           
        }, 3000)
    }
})