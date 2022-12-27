function checkNum(){
let userInput = document.getElementById("num").value;
if(userInput==null||userInput==""){
    let error = document.getElementById("errormessage");
    error.style.color="red";
    error.innerText = "Please Enter a Valid Number !! ";
    return false;

}else{
    if(userInput%2==0){
        document.getElementById("result").innerText = "Number is Even";
    }else{
        document.getElementById("result").innerText = "Number is Odd";
    }
}
}

document.getElementById("submit").addEventListener("click",checkNum);