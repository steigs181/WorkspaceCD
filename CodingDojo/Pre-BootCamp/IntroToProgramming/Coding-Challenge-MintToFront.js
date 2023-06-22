//Construct an algorithm that locates the minimum value in an array and movies it to the first position.
//Given [4,2,1,3,5] change it to [1,4,2,3,5]

function minToFront (arr) {
    var minimumNumber = null;
    for (var i = 0; i <= arr.length; i++) {
        if (arr [i + 1] < arr[i]) {
            minimumNumber = arr[i + 1]
        }
    }

    console.log(arr);
    return arr
}
minToFront([4,2,1,3,5])