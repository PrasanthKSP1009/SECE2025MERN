// Callback

function submitForm(submit,isFormValid){
    //console.log(isFormValid());
    if (isFormValid()){
        console.log("Form Validation Successfully");
        console.log(submit);
    }
    else{
        console.log("Form Validation Failed");
        console.log("Form Submission Unsuccessful");
    }
}
function formValidation(){
    email = "sece@sece.ac.in"
    password = "12345678"
    if (email==="sece@sece.ac.in" && password){
        return true
    }
    else{
        return false
    }
}
submitForm("Form Submitted Successfully", formValidation)