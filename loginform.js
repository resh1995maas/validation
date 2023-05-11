let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
function validate(){
    if(email.value.trim()=="" || pwd.value.trim()=="")
    {
        alert("Feilds cannot be empty");
        return false;
    }
    else if(pwd.value.length<=5)
    {
        pwd.style.border="1px solid red";
        alert("Password length must be more than 5");
    }
    else{
        return true;
    }
}