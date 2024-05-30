// function clearErrors(){

//     errors = document.getElementsByClassName('formerror');
//     for(let item of errors)
//     {
//         item.innerHTML = "";
//     }


// }
// function seterror(id, error){
//     //sets error inside tag of id 
//     element = document.getElementById(id);
//     element.getElementsByClassName('formerror')[0].innerHTML = error;

// }

// function validateForm(){
//     var returnval = true;
//     clearErrors();

//     //perform validation and if validation fails, set the value of returnval to false
//     var name = document.forms['myForm']["fname"].value;
//     if (name.length<5){
//         seterror("name", "*Length of name is too short");
//         returnval = false;
//     }

//     if (name.length == 0){
//         seterror("name", "*Length of name cannot be zero!");
//         returnval = false;
//     }

//     var email = document.forms['myForm']["femail"].value;
//     if (email.length>15){
//         seterror("email", "*Email length is too long");
//         returnval = false;
//     }

//     var phone = document.forms['myForm']["fphone"].value;
//     if (phone.length != 10){
//         seterror("phone", "*Phone number should be of 10 digits!");
//         returnval = false;
//     }

//     var password = document.forms['myForm']["fpass"].value;
//     if (password.length < 6){

//         // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
//         seterror("pass", "*Password should be atleast 6 characters long!");
//         returnval = false;
//     }

//     var cpassword = document.forms['myForm']["fcpass"].value;
//     if (cpassword != password){
//         seterror("cpass", "*Password and Confirm password should match!");
//         returnval = false;
//     }

//     return returnval;
// }
function clearErrors() {
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    // Sets error inside the tag of id 
    let element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    let returnval = true;
    clearErrors();

    // Perform validation and if validation fails, set the value of returnval to false
    let name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    let email = document.forms['myForm']["femail"].value;
    if (email.length > 15) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    let phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10 || isNaN(phone)) {
        seterror("phone", "*Phone number should be a 10-digit number!");
        returnval = false;
    }

    let password = document.forms['myForm']["fpass"].value;
    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        seterror("pass", "*Password should be at least 8 characters long, include a letter, a number, a special character, and an uppercase letter!");
        returnval = false;
    }

    let cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

