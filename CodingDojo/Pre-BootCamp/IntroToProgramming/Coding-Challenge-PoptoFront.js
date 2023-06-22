//Given an array, remove and retur nthe value at the beginning of the array. Do this without using any built- in 
//array methods except pop()


function popFront (arr) {
    for (var x = arr.length - 1; x >= 0; x--) {
        var newArray = [x];
    }
    console.log(newArray);
    console.log(arr);
    return arr;
}
popFront([5, 93, 22, 4]);