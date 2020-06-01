function validation(){ //asigning variables to the field elements
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var pnumber = document.getElementById("pnumber").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var error = document.getElementById("error");
    var text;
    //changing the error alert padding
    error.style.padding="10px";

    //if the length of the first name is less than 3 characters, insert text into error 
    if(fname.length < 3) {
        text = "Please Enter Valid First Name";
        error.innerHTML = text;
        return false;
    }
   
    //if the length of the last name is less than 3 characters, insert text into error 

    if(lname.length < 3) {
    text = "Please Enter Valid Last Name";
    error.innerHTML = text;
    return false;
    }
   //if phone number is Not a Number OR the lenght is not equal to 10 lenght, insert text into erro
    if(isNaN(pnumber) || pnumber.length !=10) {
        text = "Please Enter Valid Phone Number";
        error.innerHTML = text;
        return false;
    }
    // if email indexOf '@' is not found, returns -1  or email length is less than 6, insert error into text
    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email Address";
        error.innerHTML = text;
        return false;
    } 
        //if lenght of characters in subject is less than 30, insert text into error
     if(subject.length <= 30) {
          text = "Please Enter More Than 30 Characters ";
         error.innerHTML = text;
          return false;
     }

     //if all conditions return false, alert "Form Submitted Successfully!"
       alert("Form Submitted Successfully!")
       ;
}

