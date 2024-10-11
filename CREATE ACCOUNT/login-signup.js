// -------LOGIN TO SIGNUP & SIGNUP TO LOGIN-------
// --------CHAINGING PAGE CODE---------

function gotosignup(){
    const sidebar = document.querySelector('.form')
    sidebar.style.display = 'flex'
        const hideicon = document.querySelector('.form-container')
        hideicon.style.display = 'none'
}

function gotosignin(){
    const sidebar = document.querySelector('.form')
    sidebar.style.display = 'none'
        const hideicon = document.querySelector('.form-container')
        hideicon.style.display = 'block'
}

// ------GO TO LOGIN WHEN SUBMIT BUTTON CLICKED IN REGISTER PAGE------

function gotologin(){
    const sidebar = document.querySelector('.form')
    sidebar.style.display = 'none'
        const hideicon = document.querySelector('.form-container')
        hideicon.style.display = 'block'
}


// ------------------------------------------------------


// ---------LOGIN FORM VALIDATION START------------






function validateloginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordString =new String(password);

    var WRONGPASSWORD = String("ABCD");
    var isValid = true;
    var passlenth =8;
    // Email validation
    if (username.trim() === "") {
        document.getElementById("usernameError").innerHTML = "*EMAIL IS REQUIRED";
        isValid = false;
    } 
    else if (!validateEmailinlogin(username)) {
        document.getElementById("usernameError").innerHTML = "*PLEASE ENTER VALID EMAIL";
        isValid = false;
    }
    else {
        document.getElementById("usernameError").innerHTML = "";
    }

    // Password validation
    if (password.trim() === "") {
        document.getElementById("passwordError").innerHTML = "*PASSWORD IS REQUIRED";
        isValid = false;
    } 
    else if (passwordString.length() !==  passlenth ) {
        document.getElementById("passwordError").innerHTML = "*PASSWORD MUST BE HAVE 8 DEGITS";
        isValid = false;
    }
    else if(passwordString !== WRONGPASSWORD){
        document.getElementById("passwordError").innerHTML = "*INCORECT PASSWORD";
        isValid = false;
    }    
    else {
        document.getElementById("passwordError").innerHTML = "";
    }

    return isValid;
}
function validateEmailinlogin(username){
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(username);
}

// = /\S+@\S+\.\S+/;

// ---------LOGIN FORM VALIDATION END------------





// ---------SIGN-UP FORM VALIDATION START------------

 

        function validateForm() {
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var emailvalidation = document.getElementById('email').value;
            var password = document.getElementById('password-SIGNUP').value;
            var confirmPassword = document.getElementById('confirmPassword').value;
            var isValid = true;
            var passlenthofregister=8;
            var passwordStringofregister =new String(password);
        
            // First name validation
            if (firstName.trim() === "") {
                document.getElementById("firstNameError").innerHTML = "*FIRST NAME IS REQUIRED";
                isValid = false;
            }
            else if (!/^[a-zA-Z\s]*$/.test(firstName)) {
                document.getElementById("firstNameError").innerHTML = "*FIRST NAME CANNOT BE NUMBER";
                isValid = false;
            } else {
                document.getElementById("firstNameError").innerHTML = "";
            }
        
            // Last name validation
            if (lastName.trim() === "") {
                document.getElementById("lastNameError").innerHTML = "*LAST NAME IS REQUIRED";
                isValid = false;
            } 
            else if (!/^[a-zA-Z\s]*$/.test(lastName)) {
                document.getElementById("lastNameError").innerHTML = "*LAST NAME CANNOT BE NUMBER";
                isValid = false;
            }
            else {
                document.getElementById("lastNameError").innerHTML = "";
            }
        
            // Email validation
            if (emailvalidation.trim() === "") {
                document.getElementById("emailError").innerHTML = "*EMAIL IS REQUIRED";
                isValid = false;
            }
            else if (!validateEmail(emailvalidation)) {
                document.getElementById("emailError").innerHTML = "*PLEASE ENTER THE VALID EMAIL";
                isValid = false;
            } else {
                document.getElementById("emailError").innerHTML = "";
            }
        
            // Password validation
            if (password.trim() === "") {
                document.getElementById("passwordError-SIGNUP").innerHTML = "*PASSWORD IS REQUIRED";
                isValid = false;
            }else {
                document.getElementById("passwordError-SIGNUP").innerHTML = "";
            }
        
            // Confirm password validation
            if (confirmPassword.trim() === "") {
                document.getElementById("confirmPasswordError").innerHTML = "*CONFIRM PASSWORD IS REQUIRED";
                isValid = false;
            } else if (password !== confirmPassword) {
                document.getElementById("confirmPasswordError").innerHTML = "*PASSWORD DO NOT MATCH";
                isValid = false;
            } else {
                document.getElementById("confirmPasswordError").innerHTML = "";
            }


        
            // If all validations pass, return true
            return isValid;
        }

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        
        // = /\S+@\S+\.\S+/;
        
                        

// ---------SIGN-UP FORM VALIDATION END------------









// ---------------------------------------------------


// ------ form NO ONE-- start---

function showPassword(){
    const passwordField = document.getElementById('password');
    const sidebar = document.querySelector('.SHOW-ICON')
    sidebar.style.display = 'flex'

        const hideicon = document.querySelector('.HIDE-ICON')
        hideicon.style.display = 'none'
        passwordField.setAttribute('type', 'text');
}

function hidePassword(){
    const passwordField = document.getElementById('password');
    const sidebar = document.querySelector('.SHOW-ICON')
    sidebar.style.display = 'none'

        const hideicon = document.querySelector('.HIDE-ICON')
        hideicon.style.display = 'block'
        passwordField.setAttribute('type', 'password');
}

// ------ form NO ONE-- end---




// ----------FORM NO TWO PASSWORD START--------

function showPasswordone(){
    const passwordField = document.getElementById('password-SIGNUP');
    const sidebar = document.querySelector('.SHOW-ICON-one')
    sidebar.style.display = 'flex'

        const hideicon = document.querySelector('.HIDE-ICON-one')
        hideicon.style.display = 'none'
        passwordField.setAttribute('type', 'text');
}

function hidePasswordone(){
    const passwordField = document.getElementById('password-SIGNUP');
    const sidebar = document.querySelector('.SHOW-ICON-one')
    sidebar.style.display = 'none'

        const hideicon = document.querySelector('.HIDE-ICON-one')
        hideicon.style.display = 'block'
        passwordField.setAttribute('type', 'password');
}

// ----------FORM NO TWO PASSWORD END--------

// ----------FORM NO TWO CONFIRM PASSWORD START--------



function showPasswordtwo(){
    const passwordField = document.getElementById('confirmPassword');
    const sidebar = document.querySelector('.SHOW-ICON-two')
    sidebar.style.display = 'flex'

        const hideicon = document.querySelector('.HIDE-ICON-two')
        hideicon.style.display = 'none'

        passwordField.setAttribute('type', 'text');

}

function hidePasswordtwo(){
    const passwordField = document.getElementById('confirmPassword');
    const sidebar = document.querySelector('.SHOW-ICON-two')
    sidebar.style.display = 'none'

        const hideicon = document.querySelector('.HIDE-ICON-two')
        hideicon.style.display = 'block'
        passwordField.setAttribute('type', 'password');
}



// ----------FORM NO TWO CONFIRM PASSWORD END--------

