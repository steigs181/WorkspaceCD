// Debug the following code that removes negative values from an array

function removeNegatives(arr) {
    for(var i=0; i<= arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = arr.pop();
            i--;
        }
    }
    console.log(arr);
    return arr;
}
removeNegatives([3,7, -23, 0, 2.5, -4]);
