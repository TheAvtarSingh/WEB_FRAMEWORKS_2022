function find_duplicate_in_array(array){
    var object = {};
    var result:string[] = [];

    array.forEach(function(item) {
        if(!object[item]){
            object [item] = 0;
object [item] += 1;
        }

    })
    for (var prop in object) {
        if (object [prop] >= 2) {
        result.push(prop) ;
        }}
        return result;
}

console.log(find_duplicate_in_array([1,2,3,4,5,5,6,7,8,8,9]));