var first = function (array, n) {
    if (array == null) {
        return void 0;
    }
    if (n == null) {
        return array[0];
    }
    if (n < 0) {
        return [];
    }
    return array.slice(0, n);
};
console.log("Merge : ", first([7, 9, 0, -2], 0));
console.log("Merge : ", first([7, 9, 0, -2], 3));
console.log("Merge : ", first([7, 9, 0, -2], -3));
console.log("Merge : ", first([7, 9, 0, -2], 6));
