/*
document.location
document.getElementById("click").style.border="2px solid blue";
document.getElementById("click").style.borderRadius="200px";
*/
// console.clear();
// let elemClass = document.getElementsByClassName("container");

// console.log(elemClass);
// elemClass[0].style.background="red"; 
// elemClass[0].classList.add("bg-primary");

/* elemClass[0].classList.add("text-success");
undefined
elemClass[0].classList.remove("text-success");
undefined  */

/* console.log(elemClass[0].innerHTML);

        <button id="click" onclick="clicked()">Click Me</button> 
        <p>This is a paragraph which is the best para of this universe</p>
  
console.log(elemClass[0].innerText);
Click Me

This is a paragraph which is the best para of this universe 
 */

// ​tn = document.getElementsByTagName("button");
// console.log(tn);



/* elem = document.getElementsByTagName("div");

createdElement = document.createElement("p");
createdElement.innerText = "This is a Child of Div tag";
elem[0].appendChild(createdElement);
// elem[0].classList.add("blacktext");


replaceChild = document.createElement("b");
replaceChild.innerText = "This is Bold Text";
elem[0].replaceChild(replaceChild,createdElement);
 */

/* sel = document.querySelector("#click");
sel = document.querySelector(".container");
// Only first Element

sel = document.querySelectorAll(".container");
// Select all elements
 */


function clicked(){
    console.log( "The Button was clicked");
  }

  window.onload = ()=>{
console.log("Loading Complete");
  }

/* firstContainer.addEventListener('click',()=>{
    console.log("Click Hua");
}); */


firstContainer.addEventListener('mouseover',()=>{
    console.log("Mouse Overed");
     document.querySelectorAll(".container")[1].innerHTML = "<b>Mouse Has Hovered</b>";
});
/*  firstContainer.addEventListener('mouseout',()=>{
    console.log("Mouse Taken Back");
     document.querySelectorAll(".container")[1].innerHTML = "<p>This is a paragraph</p>";
}); */
 firstContainer.addEventListener('resize',()=>{
    console.log("Mouse Taken Back");
     document.querySelectorAll(".container")[1].innerHTML = "<p>This is a paragraph</p>";
});

/*
firstContainer.addEventListener('mouseup',()=>{
    console.log("Mouse Up");
});
firstContainer.addEventListener('mousedown',()=>{
    console.log("Mouse Down");
}); */