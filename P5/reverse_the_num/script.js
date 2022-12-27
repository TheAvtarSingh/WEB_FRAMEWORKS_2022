
var num = prompt("Enter Number You Want To Reverse : ")



function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
var rev = reverse_a_number(num);

window.onload = function() {
    
    document.getElementById("heading").innerHTML=rev;

}

document.write("Entered Number is  : "+num);