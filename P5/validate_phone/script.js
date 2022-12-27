function phonenumber(inputtxt)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((inputtxt.value.match(phoneno)))
        {
            alert("Valid Mob Number");
      return true;
        }
      else
        {
        alert("Mobile Number is not valid");
        return false;
        }
}