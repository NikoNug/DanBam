function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var branch = document.getElementById("branch").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "12px";

    if(name.length < 5){
        text ="Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text ="Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <= 50){
        text ="Please Enter The Message More Than 50";
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Submitted Successfully!")



    return true;
}