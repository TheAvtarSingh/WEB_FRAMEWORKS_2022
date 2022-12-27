var is_input_Array = (input)=> {
  if (toString.call(input) == "[object Array]") {
    return true;
  } else {
    return false;
  }
};

console.log('is " Hello " an array : ', is_input_Array("Hello"));
console.log(
  'is " [1,2,3,4,5,6] " an array : ',
  is_input_Array([1, 2, 3, 4, 5, 6])
);
console.log('is " [] " an array : ', is_input_Array([]));
