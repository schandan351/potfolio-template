function validate(){
    var name=document.getElementById("name").value;
    if(name==""){
        document.getElementById("error-msg").innerHTML="**please enter your name";
    }else if(!isNaN(name)){
        document.getElementById("error-msg").innerHTML="**number cant be name";
        return false;
    }

    var email=document.getElementById("email").value;
    atpos=email.indexOf("@");
    dotpos=email.indexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )){
        document.getElementById("error-msg").innerHTML="**email is not valid!! please enter correct email";

        return false;
    }

    var phone_number=document.getElementById("phone").value;
    if(phone_number==NaN){
        document.getElementById("error-msg").innerHTML="**Please enter phone number"
        return false;
    }
    
    
}