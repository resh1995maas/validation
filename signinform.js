//PHONE NUMBER VALIDATION



var inputnum=document.getElementById("inputPhonenumber");
var error1=document.getElementById("error1");
function ValidatePhonenumber()
{
//   var phoneno = /^\d{10}$/;
var phonenoformat= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(phonenoformat.test(inputnum.value))
        {
          error1.innerHTML="Valid phonenumber";
          error1.style.color="green";
      return true;
        }
      else
        {
        error1.innerHTML="Not a valid phonenumber";
        error1.style.color="red";
        
        return false;
        }
}



//EMAIL VALIDATION

  var inputmail=document.getElementById("inputEmail4");
  var error2=document.getElementById("error2");
  function ValidateEmail()
  {
  var mailformat =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
  if(mailformat.test(inputmail.value))
  {
  error2.innerHTML="Valid email address!";
  error2.style.color="green";
  return true;
  }
  else
  {
  error2.innerText="You have entered an invalid email address!";
  error2.style.color="red";
  return false;
  }
  }
 


  //PASSWORD VALIDATION

let timeout;

// traversing the DOM and getting the input and span using their IDs

let password = document.getElementById('inputPassword4');
let strengthBadge = document.getElementById('StrengthDisp');

// The strong and weak password Regex pattern checker

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength

    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong';
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'orange';
        strengthBadge.textContent = 'Medium';
    } else{
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Poor';
    }
}

// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge.style.display= 'block';
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if(password.value.length !== 0){
        strengthBadge.style.display != 'block';
    } else{
        strengthBadge.style.display = 'none';
    }
});
