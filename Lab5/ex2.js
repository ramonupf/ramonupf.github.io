function validate(){
    var password = document.getElementById("password").value;
    var retypePassword = document.getElementById("retype_password").value;
    var errorDiv = document.getElementById("error");
    errorDiv.innerHTML = "";
    var errors = [];
    //matching
    if(password !== retypePassword){
        errors.push("Passwords do not match!");
    }
    //length
    if(password.length < 8 || password.length > 20){
        errors.push("Password must be between 8 and 20 characters long!");
    }
    //lowercase
    if(!/[a-z]/.test(password)){
        errors.push("The password must contain at least one lowercase character!");
    }
    //uppercase
    if(!/[A-Z]/.test(password)){
        errors.push("The password must contain at least one uppercase character!");
    }
    //contains digit
    if(!/\d/.test(password)){
        errors.push("The password must contain at least one digit!");
    }
    //contains !@#$%^&*
    if(!/[!@#$%^&*]/.test(password)){
        errors.push("The password must contain at least one special character of this list: !@#$%^&*");
    }
    //no space
    if(/\s/.test(password)){
        errors.push("The password must not conatin any spaces!");
    }

    //display errors:
    if(errors.length > 0){
        errorDiv.innerHTML = errors.join("<br>");
        errorDiv.className = "failed";
    } else{
        errorDiv.innerHTML = "Your password is valid.";
        errorDiv.className = "success";
    }
}