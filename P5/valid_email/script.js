var mail = prompt("Enter Your Mail : ");
ValidateEmail(mail);


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  {
    alert("You have entered Valid email address!")
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}