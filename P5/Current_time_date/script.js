var today = new Date();
// Creating object refernce of Date
var day = today.getDay();
// Getting Current Date
console.log("Index of Today's Day is : "+day);
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
// Providing the daylist

console.log("Today's Day is : " + daylist[day] + ".");

// Getting Time from Refernced Var

var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

  let prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
  console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);
 document.write(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);