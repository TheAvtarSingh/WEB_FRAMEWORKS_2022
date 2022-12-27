


// It return array so we have to iterate through the array


function emptyFields() {

    alert("Clicked");
    var error = document.getElementsByClassName("errorMessage");
    let input1 = document.getElementsByClassName("section").value;

    // for (i = 0; i < input1.length; i++) {
        alert(input1);
        if(input1==""||input1==null||input1==undefined){
            error.innerText= "This field is Empty!! ";
            error.innerHTML= "<b></b>";
            error.style.color = "red";
            return false;
    //  }
    }
  }






var submit = document.getElementById("submit").addEventListener("click",emptyFields);






