// 1) write a for loop that will traverse through an array of numbers and print each number
// 2) write a for loop that will traverse through an array of numbers, and print the sum of the numbers and the index of the number in the array
// 3) write a for loop that will traverse through an array of numbers, and print only the numbers greater than 5
// Bonus: Modify solution #3 so that any numbers in the array that are not greater than 5 are instead replaced with string of "no dice". this string should not be printed.
var arr1 = [8, 6, 7, 5, 3, 0, 9];
var arr2 = [4, 7, 13, 13, 19, 37, -2];
var arr3 = [6, 2, 12, 14, -24, 5, 0];


// Solution #1:
function printEachNumber(arr1) {
    for(var i = 0; i<= arr1.length - 1; i++){
        if (i <= arr1.length){
            console.log(arr1[i]);
        }
    }
    return arr1;
} printEachNumber(arr1);

console.log("This is solution #2");

// Solution #2:
function addToTheArray(arr2){
    sum = null;
    for(i = 0; i<= arr2.length -1; i++) {
        if(i < arr2.length) {
            sum += arr2[i];
            console.log("Sum = " + sum);
            console.log("Index = " +  arr2[i]);
            }
        }
    return arr2
} addToTheArray(arr2);

console.log("This is solution #3");

// Solution #3
function greaterThanFive(arr3) {
    for(var i = 0; i<= arr3.length-1; i++){
        if (arr3[i] > 5) {
            console.log(arr3[i]);
        }
        else {
            arr3[i] = "no dice";
        }

    }
    return arr3
} greaterThanFive(arr3);